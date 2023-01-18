const id=document.querySelector("#id" ),
nombre=document.querySelector("#nombre" ),
precio=document.querySelector("#precio" ),
stock=document.querySelector("#stock" ),
img=document.querySelector("#img" ),
search=document.querySelector("#search"),
tbody=document.querySelector("#table-body"),
formInventario=document.querySelector("#formInventario");
const radios=document.querySelectorAll('input[type="radio"]');

const inventario=[
    {
        id:1,
        nombre:"pizza",
        precio:2500,
        stock:100,
        img:"../imgs/pizza.jpg"
      },
    {
        id:2,
        nombre:"panino",
        precio:1800,
        stock:200,
        img:"../imgs/panino.jpeg"
    },
    {
        id:3,
        nombre:"empanadas",
        precio:280,
        stock:300,
        img:"../imgs/empanadas.jpg"
    },
    {
        id:4,
        nombre:"ravioles",
        precio:950,
        stock:400,
        img:"../imgs/ravioles.jpg"
    }
    
]

let comidas;{
    if(localStorage.getItem("inventario")){
        comidas=JSON.parse(localStorage.getItem("inventario"));
    }else{
        comidas=inventario;
    }
}

function Comida(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    // this.precio = Number(precio);
    this.stock = Number(stock);
    if (precio == "") { //LISTO
      this.precio = 1;
    } else {
      this.precio = parseFloat(precio);
    }

  if (img == "") {
    this.img = `https://via.placeholder.com/150`;
  } else {
    this.img = img;
  }
}

function cargarInventario(arr, comida) {
    arr.push(comida);
  }
  //Funciones de LS
  function guardarLS(arr) {
    localStorage.setItem("inventario", JSON.stringify(arr));
  }
  
  function filtrar(arr, filtro, param) {
    return arr.filter((el) => {
      if (param == "precio") {
        return el.precio <= parseFloat(filtro);
      } else {
        return el[`${param}`].includes(filtro);
      }
    });
  }
  
  function crearHtml(arr) {
    tbody.innerHTML = "";
  
    let html = "";
    for (const item of arr) {
      html = `<tr>
    <td>${item.id}</td>
    <td>${item.nombre}</td>
    <td>${item.precio}</td>
    <td>${item.stock}</td>
    <td><img src="${item.img}"/></td>
    <td><button class="btn red" id="${item.id}">Borrar</button></td>
    </tr>`;
      tbody.innerHTML += html;
    }

    const arrayBotones = document.querySelectorAll("td .btn");
    arrayBotones.forEach((btn)=>{
      btn.addEventListener('click',()=>{
        comidas = comidas.filter((el) => el.id != btn.id);
        console.log(comidas);
  
        guardarLS(comidas);
        crearHtml(comidas);
      })
    })
  }
 
  crearHtml(comidas);
 
  formInventario.addEventListener("submit", (e) => {
    e.preventDefault();
    //#####
    const newBook= new Comida(id.value,
      nombre.value,
      precio.value,
      stock.value,       
      img.value)
  
  console.log(newComida);
  cargarInventario(comidas, newComida);
  guardarLS(comidas)
  crearHtml(comidas)
  formInventario.reset()
  });
  
  //Listeners de búsqueda
  search.addEventListener("input", () => {
    let nuevoFiltro = filtrar(comidas, search.value, "nombre");
    crearHtml(nuevoFiltro);
  });
  //###### RadioButtons
  for (const radio of radios) {
    radio.addEventListener("change", () => {
      if (radio.checked) {
        search.addEventListener("input", () => {
          let nuevoFiltro = filtrar(comidas, search.value, radio.value);
          crearHtml(nuevoFiltro);
        });
      }
    });
  }








