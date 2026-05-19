<?php

// EJERCICIO 6:
// Almacenar Datos Temporales de un Formulario (\$_SESSION)
// Cree un formulario donde el usuario pueda ingresar su nombre, correo y edad.
// Antes de enviarlo definitivamente, almacene los datos en la sesión para que, si el usuario recarga la página o vuelve hacia atrás, los datos no se pierdan.
// Al enviar el formulario correctamente, borre la sesión con session_unset().

session_start();

if(!isset($_SESSION['logged_in'])){
    echo "<script>location.href='../login.php?ej6=true'</script>";
    die();
}

if(isset($_POST['submit'])){ // Validamos que sea el envío de NUESTRO formulario (el name de mi boton de submit).
    $_SESSION['nombre'] = $_POST['nombre'] ?? '';
    $_SESSION['correo'] = $_POST['correo'] ?? '';
    $_SESSION['edad'] = $_POST['edad'] ?? '';

    if(!in_array('', [$_SESSION['nombre'], $_SESSION['correo'], $_SESSION['edad']])){
        unset($_SESSION['nombre'], $_SESSION['correo'], $_SESSION['edad']); // Borro únicamente los datos de mi formulario.
    }
}

echo "<button onclick='location.href=\"../\"'>Ir atrás</button><br><br>";

echo "EJERCICIO 6:<br><br>";
echo "Ingrese sus datos:<br><br>";

echo '<form method="POST" action="">
        Nombre: <input type="text" name="nombre" value="' . ($_SESSION['nombre'] ?? '') . '"><br><br>
        Correo: <input type="email" name="correo" value="' . ($_SESSION['correo'] ?? '') . '"><br><br>
        Edad: <input type="number" name="edad" value="' . ($_SESSION['edad'] ?? '') . '"><br><br>
        <input type="submit" name="submit" value="Enviar">
    </form>';

?>