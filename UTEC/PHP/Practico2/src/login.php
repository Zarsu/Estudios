<?php

session_start();

if(!isset($_SESSION['logged_in'])){
    $_SESSION['logged_in'] = true;
}

if(isset($_GET['ej4'])){
    echo "<script>location.href='ejercicio4/ejercicio4.php'</script>";
}

if(isset($_GET['ej5'])){
    echo "<script>location.href='ejercicio5/ejercicio5.php'</script>";
}

if(isset($_GET['ej6'])){
    echo "<script>location.href='ejercicio6/ejercicio6.php'</script>";
}

if(isset($_GET['ej7'])){
    echo "<script>location.href='ejercicio7/ejercicio7.php'</script>";
}
?>