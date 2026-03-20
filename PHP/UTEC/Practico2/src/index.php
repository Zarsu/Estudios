<?php

echo "TALLER DE PHP - PRÁCTICO 2<br><br>";

echo "EJERCICIO 1:<br>";
echo "Información del Servidor (\$_SERVER)<br>";
echo "Cree un script que muestre en pantalla:<br>";
echo "- El nombre del script.<br>";
echo "- La dirección IP del usuario.<br>";
echo "- El tipo de navegador.<br><br>";

echo "<a href='ejercicio1/ejercicio1.php'>Ejercicio 1</a><br><br>";

echo "EJERCICIO 2:<br>";
echo "Redireccionamiento Automático (\$_SERVER)<br>";
echo "Cree una página que detecte si el usuario accede desde un móvil, y si es así, redirigir a mobile.php usando header().<br>";
echo "Utilice funciones como strpos() para verificar la existencia de la palabra \"Mobile\", y use die() para detener la ejecución luego de redirigir.<br><br>";

echo "<a href='ejercicio2/ejercicio2.php'>Ejercicio 2</a><br><br>";

echo "EJERCICIO 3:<br>";
echo "Bloqueo de Acceso según Dirección IP (\$_SERVER)<br>";
echo "Cree un sistema que bloquee el acceso a ciertos usuarios según su dirección IP.<br>";
echo "- Use \$_SERVER['REMOTE_ADDR'] para obtener la IP del visitante.<br>";
echo "- Defina un arreglo con IP’s prohibidas y verifique si la IP del usuario está en la lista.<br>";
echo "- Si la IP está bloqueada, muestre un mensaje de acceso denegado y use die().<br>";
echo "- Si la IP es válida, muestre un mensaje de bienvenida.<br><br>";

echo "<a href='ejercicio3/ejercicio3.php'>Ejercicio 3</a><br><br>";


echo "EJERCICIO 4:<br>";
echo "Contador de Visitas por Sesión (\$_SESSION)<br>";
echo "Implemente un contador de visitas dentro de la sesión actual.<br>";
echo "- Cuando sea la primera vez que se entre, se inicializa en 1.<br>";
echo "- Si ya existe, incremente su valor en cada acceso.<br>";
echo "- Muestre el número de visitas dentro de la sesión actual.<br><br>";

echo "<a href='ejercicio4/ejercicio4.php'>Ejercicio 4</a><br><br>";


echo "EJERCICIO 5:<br>";
echo "Registro de Último Inicio de Sesión (\$_SESSION)<br>";
echo "Cree un sistema donde, al iniciar sesión, se almacene la fecha y hora del último acceso.<br>";
echo "- Si es la primera vez que el usuario inicia sesión, muestre \"Este es su primer acceso\".<br>";
echo "- Si ya ha ingresado antes, muestre la última fecha y hora de acceso y actualice el valor.<br>";
echo "- Use date(\"Y-m-d H:i:s\") para almacenar la fecha en \$_SESSION['ultimo_acceso'].<br><br>";

echo "<a href='ejercicio5/ejercicio5.php'>Ejercicio 5</a><br><br>";

echo "EJERCICIO 6:<br>";
echo "Almacenar Datos Temporales de un Formulario (\$_SESSION)<br>";
echo "Cree un formulario donde el usuario pueda ingresar su nombre, correo y edad.<br>";
echo "Antes de enviarlo definitivamente, almacene los datos en la sesión para que, si el usuario recarga la página o vuelve hacia atrás, los datos no se pierdan.<br>";
echo "Al enviar el formulario correctamente, borre la sesión con session_unset().<br><br>";

echo "<a href='ejercicio6/ejercicio6.php'>Ejercicio 6</a><br><br>";

echo "EJERCICIO 7:<br>";
echo "Temporizador de Sesión con Auto-Cierre (\$_SESSION)<br>";
echo "Cree un sistema donde la sesión se cierre automáticamente si el usuario permanece inactivo por 5 minutos.<br>";
echo "- Almacene en \$_SESSION['ultimo_movimiento'] el time() de la última acción.<br>";
echo "- En cada carga de página, compare el tiempo actual con el almacenado.<br>";
echo "- Si han pasado más de 300 segundos, elimine la sesión y rediríjalo a una página de login.<br><br>";

echo "<a href='ejercicio7/ejercicio7.php'>Ejercicio 7</a><br><br>";

echo "EJERCICIO 8:<br>";
echo "Simulación de Publicidad con Cookies (\$_COOKIE)<br>";
echo "Cree una ventana emergente (popup) con un anuncio.<br>";
echo "Al cerrar el anuncio, almacene en \$_COOKIE['anuncio_cerrado'] un valor que impida que vuelva a mostrarse durante 24 horas.<br><br>";

echo "<a href='ejercicio8/ejercicio8.php'>Ejercicio 8</a><br><br>";

echo "EJERCICIO 9:<br>";
echo "Guardar Productos Favoritos (\$_COOKIE)<br>";
echo "Cree una tienda ficticia donde el usuario pueda marcar productos como favoritos.<br>";
echo "Al hacer clic en \"Añadir a favoritos\", almacene el producto en \$_COOKIE['favoritos'].<br>";
echo "Muestre en pantalla los productos favoritos cada vez que el usuario visite la página.<br>";
echo "Permita eliminar productos de la lista de favoritos.<br><br>";

echo "<a href='ejercicio9/ejercicio9.php'>Ejercicio 9</a><br><br>";

echo "EJERCICIO 10:<br>";
echo "Sistema de Filtros por URL (\$_GET)<br>";
echo "Cree una página productos.php que simule un listado de productos filtrables.<br>";
echo "Ejemplos de acceso:<br>";
echo "productos.php?categoria=tecnologia<br>";
echo "productos.php?categoria=hogar&orden=precio<br>";
echo "productos.php?categoria=tecnologia&orden=nombre<br>";
echo "Si existe categoria, mostrar: \"Filtrando productos por categoría: [valor]\".<br>";
echo "Si existe orden, mostrar: \"Ordenando por: [valor]\".<br>";
echo "Si no se envía ningún parámetro, mostrar: \"Mostrando todos los productos\".<br>";
echo "- Validar todos los parámetros con isset().<br>";
echo "- Usar htmlspecialchars() antes de imprimirlos.<br><br>";

echo "<a href='ejercicio10/ejercicio10.php'>Ejercicio 10</a><br><br>";

echo "EJERCICIO 11:<br>";
echo "Buscador con Coincidencias Parciales<br>";
echo "Dado un listado de productos y un pedido por GET, por ejemplo:<br>";
echo "\$productos = [\"Laptop\", \"Mouse\", \"Teclado\", \"Monitor\"];<br>";
echo "productos.php?q=mo<br>";
echo "Mostrar todos los productos que contengan el texto pasado por el pedido GET.<br>";
echo "- Ignorar mayúsculas/minúsculas.<br>";
echo "- Si no hay resultados, mostrar mensaje acorde.<br><br>";

echo "<a href='ejercicio11/ejercicio11.php'>Ejercicio 11</a><br><br>";


?>