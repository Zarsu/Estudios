<?php

// EJERCICIO 5:
// Registro de Último Inicio de Sesión (\$_SESSION)
// Cree un sistema donde, al iniciar sesión, se almacene la fecha y hora del último acceso.
// - Si es la primera vez que el usuario inicia sesión, muestre \"Este es su primer acceso\".
// - Si ya ha ingresado antes, muestre la última fecha y hora de acceso y actualice el valor.
// - Use date(\"Y-m-d H:i:s\") para almacenar la fecha en \$_SESSION['ultimo_acceso'].

session_start();

if(!isset($_SESSION['logged_in'])){
    echo "<script>location.href='../login.php?ej5=true'</script>";
    die();
}

echo "<button onclick='location.href=\"../\"'>Ir atrás</button><br><br>";
echo "EJERCICIO 5:<br>";

if(isset($_SESSION['ultimo_acceso'])){
    echo "Último acceso: " . $_SESSION['ultimo_acceso'] . "<br>";
} else {
    echo "Este es su primer acceso. " . date("Y-m-d H:i:s") . "<br>";
}
$_SESSION['ultimo_acceso'] = date("Y-m-d H:i:s");

echo "Borrar sesión: <a href='../borrar_sesion.php'>Borrar Sesión</a><br>";

?>