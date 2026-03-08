# Project-2 API REST (Curso)

API REST en construccion para practicar un flujo mas profesional de backend con TypeScript, Bun, Express, validacion de datos y modelado relacional.

Este proyecto forma parte de un curso que estoy siguiendo para aplicar mis bases academicas en un entorno mas cercano al trabajo real.

## Nota importante sobre el codigo

En el codigo vas a encontrar notas/comentarios escritos por mi en espanol. Estan ahi a proposito para documentar decisiones, recordatorios y contexto de aprendizaje mientras avanzo.

## Estado actual del proyecto

- Servidor Express funcionando en `src/server.ts` y arranque en `src/index.ts`.
- Carga y validacion estricta de variables de entorno en `env.ts` con `dotenv` + `valibot`.
- Middlewares globales activos:
`helmet`, `cors`, `express.json`, `express.urlencoded` y `morgan`.
- Rutas base montadas:
`/api/auth`, `/api/users`, `/api/habits`.
- Endpoints de salud activos:
`GET /health` y `POST /echo`.
- Middleware reutilizable de validacion con Valibot en `src/middleware/validation.ts`.
- Esquema de base de datos modelado con Drizzle en `src/db/dbSchema.ts`.
- Conexion a Postgres con `pg` + `drizzle-orm` en `src/db/connection.ts`, con `remember` para evitar recrear el pool en desarrollo.

## Stack tecnico

- Runtime: Bun
- Lenguaje: TypeScript
- Framework HTTP: Express 5
- Base de datos: PostgreSQL (`pg`)
- ORM: Drizzle ORM
- Validacion: Valibot
- Seguridad y utilidades HTTP: Helmet, CORS, Morgan

## Estructura principal

```txt
Project-2/
	env.ts
	src/
		index.ts
		server.ts
		db/
			connection.ts
			dbSchema.ts
		middleware/
			validation.ts
		routes/
			authRoutes.ts
			userRoutes.ts
			habitsRoutes.ts
		schemas/
			habits.ts
```

## Endpoints actuales

### Generales

- `GET /health` -> responde `{ status: 'OK' }`
- `POST /echo` -> responde `{ message: "I'm alive!" }`

### Auth (`/api/auth`)

- `POST /register` -> placeholder: `User registered successfully`
- `POST /login` -> placeholder: `User logged in successfully`

### Users (`/api/users`)

- `GET /` -> placeholder de bienvenida
- `GET /:id` -> placeholder por id
- `PUT /:id` -> placeholder de actualizacion
- `DELETE /:id` -> placeholder de eliminacion

### Habits (`/api/habits`)

- `GET /` -> placeholder de bienvenida
- `GET /:id` -> placeholder por id
- `POST /` -> valida `body` con `creationSchema`
- `POST /:id/complete` -> valida `params` y `body`
- `PUT /:id` -> placeholder de actualizacion
- `DELETE /:id` -> placeholder de eliminacion

## Variables de entorno requeridas

Definidas y validadas en `env.ts`:

- `NODE_ENV`: `production | development | test`
- `APP_STAGE`: `production | dev | test`
- `PORT`: numero entre `1` y `65535`
- `DATABASE_URL`: debe iniciar con `postgresql://`
- `JWT_SECRET`: minimo 32 caracteres
- `JWT_EXPIRES_IN`: formato como `1h`, `30m`, `7d`
- `BYCRYPT_SALT_ROUNDS`: numero entre `10` y `20`

## Levantar en desarrollo

```bash
bun install
bun run dev
```

Script disponible en `package.json`:

- `dev`: `bun --watch src/index.ts`

## Proximos pasos

- Reemplazar respuestas placeholder por controladores reales.
- Agregar autenticacion JWT en `auth` y proteccion de rutas.
- Incorporar tests (unitarios e integracion).
