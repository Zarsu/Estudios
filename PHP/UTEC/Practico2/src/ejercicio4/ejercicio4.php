<?php

// EJERCICIO 4:
// Contador de Visitas por Sesión (\$_SESSION)
// Implemente un contador de visitas dentro de la sesión actual.
// - Cuando sea la primera vez que se entre, se inicializa en 1.
// - Si ya existe, incremente su valor en cada acceso.
// - Muestre el número de visitas dentro de la sesión actual.

session_start();

if(!isset($_SESSION['logged_in'])){
    echo "<script>location.href='../login.php?ej4=true'</script>";
    die();
}

if (!isset($_SESSION['contador_visitas'])) {
    $_SESSION['contador_visitas'] = 1;
} else {
    $_SESSION['contador_visitas']++;
}

echo "<button onclick='location.href=\"../\"'>Ir atrás</button><br><br>";
echo "EJERCICIO 4:<br>";
echo "Número de visitas en esta sesión: " . $_SESSION['contador_visitas'] . "<br>";

?>