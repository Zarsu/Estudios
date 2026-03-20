<?php

// EJERCICIO 3:
// Bloqueo de Acceso según Dirección IP (\$_SERVER)
// Cree un sistema que bloquee el acceso a ciertos usuarios según su dirección IP.
// - Use \$_SERVER['REMOTE_ADDR'] para obtener la IP del visitante.
// - Defina un arreglo con IP’s prohibidas y verifique si la IP del usuario está en la lista.
// - Si la IP está bloqueada, muestre un mensaje de acceso denegado y use die().
// - Si la IP es válida, muestre un mensaje de bienvenida.

echo "<button onclick='location.href=\"../\"'>Ir atrás</button><br><br>";

echo "EJERCICIO 3:<br><br>";
$bannedIps = ['192.168.1.100', '192.168.1.101', '192.168.1.102'];

// $bannedIps[] = '172.19.0.1'; // debug propouse

$userIp = $_SERVER['REMOTE_ADDR'];

if(in_array($userIp, $bannedIps)) {
    echo "Acceso denegado. Tu dirección IP ($userIp) está bloqueada.";
    die();
}

echo "IP autorizada ($userIp), ¡bienvenido al sistema!<br>";

?>