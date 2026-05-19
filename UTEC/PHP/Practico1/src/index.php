<?php

echo "TALLER DE PHP - PRÁCTICO 1<br>";

echo "EJERCICIO 1:<br>";
echo "Escribe un programa que multiplique los 20 primeros números naturales y muestre el resultado en pantalla<br><br>";

// Asumo que el '0' no es natural.
$naturales = 1; 
echo "Inicio: ". $naturales . " -> ";
for($i = 1; $i < 20; $i++) {
    if($i == 20) {
        echo ($naturales *= ($i+1)) . " <- Fin";
        break;
    }
    echo ($naturales *= ($i+1)) . " -> ";
}
echo "<br>Resultado: " . $naturales . "<br><br>";

echo "EJERCICIO 2:<br>";
echo "Imprimir en pantalla la tabla del 1 al 10 del parámetro pasado por el método GET utilizando pasaje por URL<br><br>";

$param = $_GET['ej2'] ?? 0;
echo "Tabla del " . $param . ":<br>";
for($i = 1; $i <= 10; $i++) {
    echo $param . " x " . $i . " = " . ($param * $i) . "<br>";
}
echo "<br>
<form>
    <input type='text' name='ej2' placeholder='Ingrese un número'>
    <input type='submit' value='Mostrar tabla'>
</form>
<br>";

echo "EJERCICIO 3:<br>";
echo "Crear un array llamado meses que almacene el nombre de los doce meses del año. Recorrerlo con for para mostrar por pantalla los doce nombres<br><br>";

$meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
for($i = 0; $i < count($meses); $i++) {
    echo $meses[$i] . "<br>";
}
echo "<br>";

echo "EJERCICIO 4:<br>";
echo "Idem al anterior pero utilizando foreach<br><br>";

foreach($meses as $mes) {
    echo $mes . "<br>";
}
echo "<br>";

echo "EJERCICIO 5:<br>";
echo "Escribir un programa que calcule el factorial de 5 y lo imprima en pantalla<br><br>";

$factorial = 1;
$factorialDe = 5;
echo "Inicio: ". $factorial . " -> ";
for($i = 1; $i < $factorialDe; $i++) {
    if(($i+1) == $factorialDe) {
        echo ($factorial *= ($i+1)) . " <- Fin<br><br>";
        break;
    }
    echo ($factorial *= ($i+1)) . " -> ";
}
echo "El factorial de " . $factorialDe . " es: " . $factorial . "<br><br>";

echo "EJERCICIO 6:<br>";
echo "Un número es perfecto si y sólo si la suma de sus divisores sin contarse el mismo da ese número. Defina un programa que reciba un número a través de un formulario y devuelva en pantalla si dicho número es perfecto o no<br><br>";

function esPerfecto($num) {
    if($num <= 0) {
        return false; 
    }
    $sumaDivisores = 0;
    for($i = 1; $i < $num; $i++) {
        if($num % $i == 0) {
            $sumaDivisores += $i;
        }
    }
    return $sumaDivisores == $num;
}

$perfectNumber = $_GET['ej6'] ?? 0;

echo "Número ingresado: " . $perfectNumber . "<br>";
if(esPerfecto($perfectNumber)) {
    echo "El número " . $perfectNumber . " es perfecto.<br><br>";
} else {
    echo "El número " . $perfectNumber . " no es perfecto.<br><br>";
}

echo "
<form>
    <input type='text' name='ej6' placeholder='Ingrese un número'>
    <input type='submit' value='Verificar si es perfecto'>
</form>
<br>";

echo "EJERCICIO 7:<br>";
echo "Idem al anterior pero en vez de utilizar un formulario, se pide realizar una iteración que encuentre los primeros 3 números perfectos, y los imprima en pantalla<br><br>";

function esPrimo($num) {
    if($num <= 1) {
        return false;
    }
    for($i = 2; $i <= sqrt($num); $i++) {
        if($num % $i == 0) {
            return false;
        }
    }
    return true;
}

function devolverPerfecto($num) {
    // Fórmula de los perfectos: 2^(p-1) * (2^p - 1) donde p es un número primo.
    if(esPrimo($num)) {
        $p = $num;
        $perfecto = (2 ** ($p - 1)) * ((2 ** $p) - 1);
        return $perfecto;
    }
    return 0;
}

$cantPerfectos = 3;
$inicio = true;
for($num = 1; $cantPerfectos > 0; $num++) {
    if(!esPrimo($num)){
        continue;
    }
    $perfecto = devolverPerfecto($num);
    if(!esPerfecto($perfecto)) {
        continue;
    }
    if($inicio) {
        echo "Inicio: ";
        $inicio = false;
    }
    if($cantPerfectos == 1) {
        echo $perfecto . " <- Fin<br><br>";
    }else{
        echo $perfecto . " -> ";
    }
    $cantPerfectos--;
}

echo "EJERCICIO 8:<br>";
echo "Hacer un programa que tenga un array de 5 números enteros y haga lo siguiente con él:<br>";

$numeros = [2, 32, 265, 43, 3];

function mostrarArray($arr) {
    foreach($arr as $num) {
        echo "[$num]";
    }
    echo "<br><br>";
}

echo "1. Recorrerlo y mostrarlo<br><br>";

mostrarArray($numeros);

echo "2. Ordenarlo y mostrarlo<br><br>";

sort($numeros);
mostrarArray($numeros);

echo "3. Mostrar su longitud<br><br>";

echo "Longitud del array: " . count($numeros) . "<br><br>";

echo "EJERCICIO 9:<br>";
echo "Escribir un programa que calcule y muestre en pantalla los primeros 20 números de la sucesión de Fibonacci<br><br>";

function fibonacci($n) { // '$n' es la cantidad de números a mostrar.
    $fib = [0, 1];
    for($i = 2; $i < $n; $i++) {
        $fib[] = $fib[$i - 1] + $fib[$i - 2];
    }
    return $fib;
}

mostrarArray(fibonacci(20));

?>