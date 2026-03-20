<?php

// EJERCICIO 9:
// Guardar Productos Favoritos (\$_COOKIE)
// Cree una tienda ficticia donde el usuario pueda marcar productos como favoritos.
// Al hacer clic en \"Añadir a favoritos\", almacene el producto en \$_COOKIE['favoritos'].
// Muestre en pantalla los productos favoritos cada vez que el usuario visite la página.
// Permita eliminar productos de la lista de favoritos.

if(!isset($_COOKIE['favoritos'])){
    setcookie('favoritos', json_encode([]), time() + (86400 * 30), "/"); // 30 días
    $favoritos = [];
} 

echo "<button onclick='location.href=\"../\"'>Ir atrás</button><br><br>";
echo "EJERCICIO 9:<br>";

$productos = ['Producto A', 'Producto B', 'Producto C', 'Producto D', 'Producto E', 'Producto F', 'Producto G', 'Producto H', 'Producto I', 'Producto J'];

echo "Productos disponibles:<br><br>";
echo "<div style='display: flex; flex-wrap: wrap; gap: 10px;'>";
foreach ($productos as $producto) {
    echo "<div style='border: 1px solid #ccc; padding: 10px; width: 150px; text-align: center;'>";
    echo $producto;
    if(in_array($producto, json_decode($_COOKIE['favoritos'], true))){
        echo "<form method='post' action='eliminar_fav.php'>
            <br><button style='background-color: red; color: white;' type='submit' name='product' value='$producto'>Eliminar de favoritos</button><br>
        </form>";
        } else {
        echo "<form method='post' action='agregar_fav.php'>
            <br><button style='background-color: green; color: white;' type='submit' name='product' value='$producto'>Añadir a favoritos</button><br>
        </form>";
    }
    echo "</div> <br><br>";
}
echo "</div>";

?>