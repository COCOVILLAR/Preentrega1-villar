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
  
  
  // le voy a poner un tono para cambiar a rojo o gris cuando vayamos a sector queja jaja

  const cambiarColor = document.getElementById("cambiarColor");

  cambiarColor.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red'
  })
