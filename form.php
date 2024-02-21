<?php

$nombre = $_POST['name'];
$mail = $_POST['mail'];
$siono = $_POST['siono'];

//como me va a llegar al mail 
$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "Su e-mail es: " . $mail . " ,\r\n";
$mensaje .= "La respuesta es: " . $siono . " ,\r\n";
$mensaje .= "Este mail fue enviado el . date('d/m/Y', time());

$para = 'consuelovillar18@gmail.com'; 
$asunto = 'Mensaje de mi sitio web'; 


mail($para, $asunto, utf8_decode($mensaje), $header);

/* redireccion al haber enviado el form  */
header('Location:exito.html');

?>

/* se hizo esto para hacer el form q esta presente en la pagina de coderhouse de youtube, asi se puede notificar al cliente cuanto debe */