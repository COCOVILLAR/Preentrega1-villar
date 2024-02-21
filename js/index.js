

//falta que cuando se solucione dicho problema se envie un mail al usuario que hizo dicha queja
//faltaria espacio para colocar ubicacion / descripciones de problema / foto


function enviarQueja(event) {
    event.preventDefault()
    // Obtener los valores seleccionados por el usuario
    //let porque cambia constantemente 
     let department = document.getElementById('department').value;
      let queja = document.getElementById('queja').value;  
      let datospersonales= document.getElementById('datospersonales').value;  
      let algomas = document.getElementById('algomas').value;  
  
      console.log(department)
     
     let status = ""
     let ticketDatabase = [];
  
  
      // Crear un objeto para representar el ticket
      //es constante y una vez que se asigna - no cambia 
     const ticket = {
        department: department,
      queja: queja,
      status: 'Pendiente'
     };
  
      // Simulación del envío del ticket - 
      // En este caso, solo mostraremos la información en inspeccionar/consola
     console.log('Nuevo Ticket informado:', ticket);
     ticketDatabase.push(ticket)
      console.log("el total de tickets actuales son: ", ticketDatabase)
  
  
      // Simular que se ha informado dicha queja después de un tiempo (por ejemplo, 5 segundos) 
      //lo ideal seria colocar 24 hs
     setTimeout(function () {
         // Actualizar el estado del ticket
          ticket.status = 'Informado';
  
          // Mostrar la notificación - se te enviara notificacion al mail cuando se solucione
        alert('La queja ha sido informada para el departamento , se enviará un mail a tu casilla para avisarte cuando se solucione! ' + ticket.department);
  
          //Notificar al usuario de alguna manera
        console.log('Ticket Informado:', ticket);
      }, 5000);
  }
  
  
  
  
  
  
  
  
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
  
   
  
  
  //registro ingreso 
  //esto va a ser llamada en registroingreso.html
   
  
  function add(event){
    event.preventDefault()
  
    const nameandsurname = document.getElementById('nameandsurname').value;
    const identitycard = document.getElementById('identitycard').value;
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
  
    console.log(nameandsurname,identitycard,user, password);
  }
  function add2(a,b,c,d, event){
    event.preventDefault()
  
    const nameandsurname = a
    const identitycard = b
    const user = c
    const password = d
  
    console.log(nameandsurname,identitycard,user, password);
  }
  
  function esPasswordValida(pass){
    if(pass.length >= 8 && pass.includes ("A")){
      return "pass valida"
    }else{
      return "pass invalida"
     }
    //length se usa para saber la longitud de algunos elementos.
  //includes - metodo especifico que nos muestra si un carater esta disponible o es valido  
  }
  //console.log(esPasswordValida("consuelo"));
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  