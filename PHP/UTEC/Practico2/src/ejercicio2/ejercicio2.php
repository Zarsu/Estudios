<?php

//  "EJERCICIO 2:
//  "Redireccionamiento Automático (\$_SERVER)
//  "Cree una página que detecte si el usuario accede desde un móvil, y si es así, redirigir a mobile.php usando header().
//  "Utilice funciones como strpos() para verificar la existencia de la palabra \"Mobile\", y use die() para detener la ejecución luego de redirigir.<br>

echo "<button onclick='location.href=\"../\"'>Ir atrás</button><br><br>";
echo "EJERCICIO 2:<br>";

$userAgent = $_SERVER['HTTP_USER_AGENT'];
if (strpos($userAgent, "Mobile") !== false) {
    echo "<script>window.location.href='mobile.php';</script>";
    die();
} else {
    echo "No se detectó un dispositivo móvil. Bienvenido a la versión de escritorio.";
}

?>