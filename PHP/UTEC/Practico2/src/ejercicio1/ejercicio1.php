<?php

//"EJERCICIO 1:
//"Información del Servidor (\$_SERVER)
//"Cree un script que muestre en pantalla:
//"- El nombre del script.
//"- La dirección IP del usuario.
//"- El tipo de navegador.

echo "<button onclick='location.href=\"../\"'>Ir atrás</button><br><br>";
echo "EJERCICIO 1:<br>";
echo "Nombre del script: " . $_SERVER['SCRIPT_NAME'] . "<br>";
echo "Dirección IP del usuario: " . $_SERVER['REMOTE_ADDR'] . "<br>";
echo "Tipo de navegador: " . $_SERVER['HTTP_USER_AGENT'] . "<br>";

?>