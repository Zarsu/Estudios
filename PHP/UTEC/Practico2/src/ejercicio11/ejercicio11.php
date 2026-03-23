<?php

// EJERCICIO 11:
// Buscador con Coincidencias Parciales
// Dado un listado de productos y un pedido por GET, por ejemplo:
// \$productos = [\"Laptop\", \"Mouse\", \"Teclado\", \"Monitor\"];
// productos.php?q=mo
// Mostrar todos los productos que contengan el texto pasado por el pedido GET.
// - Ignorar mayúsculas/minúsculas.
// - Si no hay resultados, mostrar mensaje acorde.

$productos = [
    [
        "nombre" => "Laptop",
        "categoria" => "tecnologia",
        "precio" => 1000
    ],
    [
        "nombre" => "Mouse",
        "categoria" => "tecnologia",
        "precio" => 50
    ],
    [
        "nombre" => "Teclado",
        "categoria" => "tecnologia",
        "precio" => 80
    ],
    [
        "nombre" => "Monitor",
        "categoria" => "tecnologia",
        "precio" => 300
    ],
    [
        "nombre" => "Sofá",
        "categoria" => "hogar",
        "precio" => 500
    ],
    [
        "nombre" => "Mesa",
        "categoria" => "hogar",
        "precio" => 200
    ],
    [
        "nombre" => "Silla",
        "categoria" => "hogar",
        "precio" => 100
    ]
];


echo "<button onclick='location.href=\"../\"'>Ir atrás</button><br><br>";
echo "EJERCICIO 11:<br><br>";

echo " <form method='GET' action=''>
        <input type='text' name='productName' placeholder='Buscar producto...'>
        <button type='submit'>Buscar</button>
    </form><br>";

if(isset($_GET['productName'])){
    $searchTerm = strtolower($_GET['productName']); // Ignora mayus/minus
    $matches = [];

    foreach($productos as $producto){
        if(strpos(strtolower($producto['nombre']), $searchTerm) !== false){ // strpos nos permite buscar la posición de la subcadena, si no se encuentra devuelve false (algo parecido al %any% de SQL)
            $matches[] = $producto['nombre'];
        }
    }

    if(count($matches) > 0){
        echo "Productos encontrados:<br>";
        foreach($matches as $match){
            echo "- " . htmlspecialchars($match) . "<br>";
        }
    }else{
        echo "No se encontraron productos que coincidan con: " . htmlspecialchars($_GET['productName']);
    }
}else{
    echo "Ingrese un término de búsqueda para encontrar productos.";
}

?>