<?php

// EJERCICIO 10:
// Sistema de Filtros por URL (\$_GET)
// Cree una página productos.php que simule un listado de productos filtrables.
// Ejemplos de acceso:
// productos.php?categoria=tecnologia
// productos.php?categoria=hogar&orden=precio
// productos.php?categoria=tecnologia&orden=nombre
// Si existe categoria, mostrar: \"Filtrando productos por categoría: [valor]\".
// Si existe orden, mostrar: \"Ordenando por: [valor]\".
// Si no se envía ningún parámetro, mostrar: \"Mostrando todos los productos\".
// - Validar todos los parámetros con isset().
// - Usar htmlspecialchars() antes de imprimirlos.

if(isset($_GET['categoria']) && $_GET['categoria'] !== 'none'){
    $categoria = htmlspecialchars($_GET['categoria']);
}
if(isset($_GET['orden']) && $_GET['orden'] !== 'none'){
    $orden = htmlspecialchars($_GET['orden']);
}

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
echo "EJERCICIO 10:<br>";

echo "Filtros disponibles:<br><br>";
echo "<form method='get' action='ejercicio10.php'>
        <label for='categoria'>Categoría:</label>
        <select name='categoria' id='categoria'>
            <option value='none' selected hidden>--Seleccionar--</option>
            <option value='tecnologia'>Tecnología</option>
            <option value='hogar'>Hogar</option>
        </select><br>
        
        <label for='orden'>Ordenar por:</label>
        <select name='orden' id='orden'>
            <option value='none' selected hidden>--Seleccionar--</option>
            <option value='precioMN'>Precio Mayor-Menor</option>
            <option value='precioNM'>Precio Menor-Mayor</option>
            <option value='nombreAZ'>Nombre A-Z</option>
            <option value='nombreZA'>Nombre Z-A</option>
        </select><br>
        
        <button type='submit'>Filtrar</button>
    </form>";

if(!isset($categoria) && !isset($orden)){
    echo "Productos disponibles:<br>";
}else{
    echo "Productos filtrados por: <br>";
    if(isset($categoria)){
        echo "Categoría: $categoria <br>";
        foreach($productos as $producto){
            if($producto['categoria'] === $categoria){
                $productos_filtrados[] = $producto;
            }
        }
        $productos = $productos_filtrados;
    }
    if(isset($orden)){
        echo "Orden: $orden <br>";
        if($orden === 'precioMN'){
            usort($productos, function($a, $b){
                return $b['precio'] <=> $a['precio'];
            });
        } elseif($orden === 'precioNM'){
            usort($productos, function($a, $b){
                return $a['precio'] <=> $b['precio'];
            });
        } elseif($orden === 'nombreAZ'){
            usort($productos, function($a, $b){
                return strcmp($a['nombre'], $b['nombre']);
            });
        } elseif($orden === 'nombreZA'){
            usort($productos, function($a, $b){
                return strcmp($b['nombre'], $a['nombre']);
            });
        }
    }
}

echo "<br>";

foreach($productos as $producto){
    echo "- $producto[nombre] - $producto[categoria] - $$producto[precio] <br>";
}
?>