<?php

// EJERCICIO 7:
// Temporizador de Sesión con Auto-Cierre (\$_SESSION)
// Cree un sistema donde la sesión se cierre automáticamente si el usuario permanece inactivo por 5 minutos.
// - Almacene en \$_SESSION['ultimo_movimiento'] el time() de la última acción.
// - En cada carga de página, compare el tiempo actual con el almacenado.
// - Si han pasado más de 300 segundos, elimine la sesión y rediríjalo a una página de login.

session_start();

if(!isset($_SESSION['logged_in'])){
    echo "<script>location.href='../login.php?ej7=true'</script>";
    die();
}

if(isset($_SESSION['ultimo_movimiento'])){
    $tiempo_inactivo = time() - $_SESSION['ultimo_movimiento'];
    if($tiempo_inactivo > 300){
        echo "<script>location.href='../borrar_sesion.php'</script>";
        die();
    }
    $_SESSION['ultimo_movimiento'] = time();
}else{
    $_SESSION['ultimo_movimiento'] = time();
}

echo "<button onclick='location.href=\"../\"'>Ir atrás</button><br><br>";
echo "EJERCICIO 7:<br>";

echo "Última acción registrada: " . date('Y-m-d H:i:s', $_SESSION['ultimo_movimiento']) . "<br>";
echo "Si permanece inactivo por más de 5 minutos, la sesión se cerrará automáticamente.<br>";
echo "Nota: Para registrar una nueva acción debe ingresar a esta página nuevamente.<br>";

?>