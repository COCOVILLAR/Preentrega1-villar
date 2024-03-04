function add(event) {
    event.preventDefault()
  
    const nameandsurname = document.getElementById('nameandsurname').value;
    const identitycard = document.getElementById('identitycard').value;
    const hours = document.getElementById('hours').value;
    const usernumber = document.getElementById('usernumber').value;
    console.log(nameandsurname,identitycard, hours, usernumber);
  }
  function add2(a,b,c,d, event){
    event.preventDefault()
  
    const nameandsurname = a
    const identitycard = b
    const hours = c
    const usernumber = d
  
    console.log(nameandsurname,identitycard,hours, usernumber);
  }
  


  //constante para el carritotudo 

  const producto =[
    
    {id: 1, nombre: "producto1", imagen: "https://placehold.co/600x400", precio: 2000 },
    {id: 2, nombre: "producto2", imagen: "https://placehold.co/600x400", precio: 1000 }, 
    {id: 3, nombre: "producto3", imagen: "https://placehold.co/600x400", precio: 1500 } 
    ] 

    let cantidadItemsCarrito = 0;
    
    //

    let carrito = JSON.parse(localStorage.getItem('carrito') ) || [];

    //funcion contador 

    function actualizarIconoCarrito(){
      const iconoCarrito = document.getElementById('cantidad-items');
      if(iconoCarrito){
        iconoCarrito.textContent = cantidadItemsCarrito;
      }
    }

//fucion para mostrar los productos 

function mostrarItemsCarrito(){
  const contenedorItemsCarrito = document.getElementById('items-carrito');
  contenedorItemsCarrito.innerHTML = '';
  
  



  const item = document.createElement('div');
  carrito.forEach(producto => { 
    item.textContent = producto.nombre;
  });
  contenedorItemsCarrito.appendChild(item);
}

//vamos a hacer la funcion para las tarjetas 

function crearTarjetaProducto(){
  const contenedor = document.getElementById('contenedor-productos');



producto.forEach(producto =>{
  const tarjeta = document.createElement('div');
  tarjeta.classList.add('tarjeta-producto');

  const imagen = document.createElement('img');
  imagen.src = producto.imagen; 
  imagen.alt = producto.nombre; 
  imagen.classList.add('imagen-producto');
  tarjeta.appendChild(imagen); 

  const nombre = document.createElement('h3');
  nombre.textContent = producto.nombre;
  nombre.classList.add('nombre-producto');
  tarjeta.appendChild(nombre);
  
  const precio = document.createElement('p');
  precio.textContent = producto.precio; 
  nombre.classList.add('precio-producto');
  tarjeta.appendChild(precio);

  const botonCompra = document.createElement('button');
  botonCompra.textContent = 'agregar producto';
  botonCompra.classList.add('boton-compra');
  botonCompra.addEventListener('click',()=>{
    carrito.push(producto);   
    //agregamos el producto al carrito 
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cantidadItemsCarrito++; 
    actualizarIconoCarrito();
    mostrarItemsCarrito();
})
 
tarjeta.appendChild(botonCompra)

contenedor.appendChild(tarjeta);  

})
} 

//llamamos a las funciones 

crearTarjetaProducto();

actualizarIconoCarrito(); 

mostrarItemsCarrito();

//esto que voy a agregar es la ultima parte  //de todos modos FALTA MODIFICAR Y PULIR

/*  */
