<?php

if(!isset($_COOKIE['favoritos'])){
    setcookie('favoritos', json_encode([]), time() + (86400 * 30), "/"); // 30 días
    $favoritos = [];
} 

if(isset($_POST['product'])){
    $favoritos = json_decode($_COOKIE['favoritos'], true);
    if(in_array($_POST['product'], $favoritos)){
        $favoritos = array_diff($favoritos, [$_POST['product']]); // Devuelve un array sin el producto a eliminar
        setcookie('favoritos', json_encode($favoritos), time() + (86400 * 30), "/");
    }
}

echo "<script>window.location.href = 'ejercicio9.php';</script>";

?>