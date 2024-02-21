
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
  
  