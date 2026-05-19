## Taller de PHP - Practico 1

### Resumen Ejecutivo
Este practico desarrolla fundamentos de programacion backend con PHP a traves de ejercicios orientados a logica, estructuras de datos, manejo de parametros HTTP y validacion de resultados matematicos. El trabajo demuestra una base tecnica solida para resolver problemas de forma secuencial, escribir funciones reutilizables y trasladar requerimientos academicos a implementaciones funcionales en entorno web.

### Stack y Entorno
- PHP 8.2 sobre Apache
- Docker Compose para ejecucion local reproducible
- Navegador web para pruebas de formularios y parametros por URL

Infraestructura incluida:
- `docker-compose.yml` con imagen `php:8.2-apache`, mapeo `8080:80` y volumen `./src:/var/www/html`.

### Alcance Funcional del Practico
1. Producto acumulado de los primeros 20 numeros naturales.
2. Tabla de multiplicar dinamica segun parametro recibido por `GET`.
3. Recorrido de arreglo de meses con bucle `for`.
4. Recorrido del mismo arreglo utilizando `foreach`.
5. Calculo de factorial de 5 con control de iteracion.
6. Verificacion de numero perfecto desde formulario.
7. Busqueda de los primeros 3 numeros perfectos mediante iteracion y formula matematica.
8. Operaciones sobre array de enteros: mostrar, ordenar y medir longitud.
9. Generacion de los primeros 20 numeros de Fibonacci.

### Competencias Tecnicas Demostradas
- Manejo de estructuras de control: `for`, `foreach`, condicionales y cortes de flujo.
- Uso de arreglos y operaciones nativas (`sort`, `count`).
- Programacion funcional basica en PHP: funciones para validacion, calculo y presentacion.
- Trabajo con entrada por `$_GET` y formularios HTML simples.
- Resolucion de ejercicios matematicos (factorial, divisores, numeros perfectos, Fibonacci).
- Capacidad para descomponer problemas en pasos y validar resultados.

### Como Ejecutar
1. Levantar el entorno desde la carpeta del practico:

```bash
docker compose up -d
```

2. Abrir en el navegador:

```text
http://localhost:8080
```

3. Interactuar con los ejercicios en `src/index.php`.

---
