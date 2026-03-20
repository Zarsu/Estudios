<?php

// EJERCICIO 8:
// Simulación de Publicidad con Cookies (\$_COOKIE)
// Cree una ventana emergente (popup) con un anuncio.
// Al cerrar el anuncio, almacene en \$_COOKIE['anuncio_cerrado'] un valor que impida que vuelva a mostrarse durante 24 horas.

$tiempo_segundos = 24 * 60 * 60;
$tiempo_expiracion = time() + $tiempo_segundos; 

if (!isset($_COOKIE['anuncio_cerrado'])) {
    setcookie('anuncio_cerrado', 'true', $tiempo_expiracion);
    setcookie('anuncio_cerrado_expires_in', $tiempo_expiracion, $tiempo_expiracion);
    echo "<script>alert('¡Anuncio: Compra ahora y obtén un 20% de descuento!');</script>";
}

echo "<button onclick='location.href=\"../\"'>Ir atrás</button><br><br>";
echo "EJERCICIO 8:<br>";
echo "Si el anuncio se muestra, al cerrarlo no volverá a aparecer durante 24 horas.<br>";
if(isset($_COOKIE['anuncio_cerrado_expires_in'])){
    echo "El anuncio volverá a mostrarse: " . date('Y-m-d H:i:s', $_COOKIE['anuncio_cerrado_expires_in']);
}

?>