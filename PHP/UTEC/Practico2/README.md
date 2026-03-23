## Taller de PHP - Practico 2

### Resumen Ejecutivo
Este practico consolida fundamentos de desarrollo web backend con PHP, trabajando sobre manejo de solicitudes HTTP, estado de usuario y seguridad basica de datos de entrada. El proyecto implementa 11 ejercicios progresivos que simulan casos reales: deteccion de cliente, control de acceso, persistencia temporal, gestion de sesion, cookies de preferencia y filtrado/busqueda dinamica de informacion.

### Stack y Entorno
- PHP 8.2 sobre Apache
- Docker Compose para entorno local reproducible
- Navegador web para prueba de flujos con GET, POST, SESSION y COOKIE

Archivo de infraestructura:
- docker-compose.yml con contenedor `php:8.2-apache`, puerto `8080:80` y volumen `./src:/var/www/html`.

### Alcance Funcional del Practico
1. Uso de `$_SERVER`: identificacion de script, IP del cliente y user-agent.
2. Redireccionamiento segun dispositivo: deteccion de mobile y navegacion condicional.
3. Restriccion por IP: validacion contra lista de direcciones bloqueadas.
4. Contador de visitas por sesion: persistencia de estado en `$_SESSION`.
5. Registro de ultimo acceso: guardado y actualizacion de timestamp de login.
6. Formulario con persistencia temporal: recuperacion de campos en recarga y limpieza posterior.
7. Expiracion por inactividad: autocierre de sesion tras ventana de timeout.
8. Popup controlado por cookie: frecuencia de visualizacion limitada a 24 horas.
9. Favoritos con cookies: alta y baja de productos con persistencia del lado cliente.
10. Filtros por URL (`$_GET`): categoria y ordenamiento dinamico de listado.
11. Busqueda parcial: matching case-insensitive y respuesta ante resultados vacios.

### Competencias Tecnicas Demostradas
- Manejo de superglobales de PHP: `$_SERVER`, `$_SESSION`, `$_COOKIE`, `$_GET`, `$_POST`.
- Control de flujo HTTP y navegacion entre pantallas.
- Persistencia de estado en sesion y cliente.
- Transformacion y ordenamiento de colecciones (filtros, busquedas, `usort`, `strpos`).
- Aplicacion de saneamiento basico de salida con `htmlspecialchars`.
- Resolucion de ejercicios con enfoque incremental y orientado a casos de uso.

### Como Ejecutar
1. Desde la carpeta del practico, iniciar entorno:

```bash
docker compose up -d
```

2. Abrir en navegador:

```text
http://localhost:8080
```

3. Navegar por los ejercicios desde `index.php`.

---
