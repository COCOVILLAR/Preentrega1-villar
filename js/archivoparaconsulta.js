function add(event) {
    event.preventDefault()
  
    const nombreyapellido = document.getElementById('nombreyapellido').value;
    const numerodeidentificacion = document.getElementById('numerodeidentificacion').value;
    const numberdepartament = document.getElementById('numberdepartament').value;
    const answer = document.getElementById('answer').value;
    console.log(nombreyapellido,numerodeidentificacion, numberdepartament, answer);
  }
  function add2(a,b,c,d, event){
    event.preventDefault()
  
    const nombreyapellido = a
    const numerodeidentificacion = b
    const numberdepartament = c
    const answer = d
  
    console.log(nombreyapellido,numerodeidentificacion,numberdepartament, answer);
  }
  
  