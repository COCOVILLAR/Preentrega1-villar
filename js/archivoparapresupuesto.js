
//alquiler presupuesto 
function calcularPrecioAlquilerConDescuentoPagandoEfectivo(cantidad, precioUnitario, event){
    let precioTotal= cantidad * precioUnitario;

    if(cantidad >=100000){
        precioTotal *=99000;


    }
    console.log(precioTotal);
    return precioTotal;
}

console.log(calcularPrecioAlquilerConDescuentoPagandoEfectivo(1,99000));



document.getElementById('myForm').addEventListener('submit', function(event) {

    event.preventDefault()
    
    const name = document.getElementById('fname').value;
    const email = document.getElementById('mail').value;
    const email2 = document.getElementById('mail2').value;
    console.log(name,email,email2);
}); 

 