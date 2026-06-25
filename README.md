```
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║     ███╗   ███╗ ██╗ ███╗   ██╗ ██╗                                               ║
║     ████╗ ████║ ██║ ████╗  ██║ ██║                                               ║
║     ██╔████╔██║ ██║ ██╔██╗ ██║ ██║                                               ║
║     ██║╚██╔╝██║ ██║ ██║╚██╗██║ ██║                                               ║
║     ██║ ╚═╝ ██║ ██║ ██║ ╚████║ ██║                                               ║
║     ╚═╝     ╚═╝ ╚═╝ ╚═╝  ╚═══╝ ╚═╝                                               ║
║                                                              ║
║        ██╗ ███╗   ██╗ ██╗   ██╗ ███████╗ ███╗   ██╗        ║
║        ██║ ████╗  ██║ ██║   ██║ ██╔════╝ ████╗  ██║        ║
║        ██║ ██╔██╗ ██║ ██║   ██║ █████╗   ██╔██╗ ██║        ║
║        ██║ ██║╚██╗██║ ╚██╗ ██╔╝ ██╔══╝   ██║╚██╗██║        ║
║        ██║ ██║ ╚████║  ╚████╔╝  ███████╗ ██║ ╚████║        ║
║        ╚═╝ ╚═╝  ╚═══╝   ╚═══╝   ╚══════╝ ╚═╝  ╚═══╝        ║
║                                                              ║
║      ████████╗  █████╗  ██████╗  ██╗   ██╗ ██╗               ║
║      ╚══██╔══╝ ██╔══██╗ ██╔══██╗ ██║   ██║ ██║               ║
║         ██║    ███████║ ██████╔╝ ██║   ██║ ██║               ║
║         ██║    ██╔══██║ ██╔══██╗ ██║   ██║ ██║               ║
║         ██║    ██║  ██║ ██║  ██║ ╚██████╔╝ ██║               ║
║         ╚═╝    ╚═╝  ╚═╝ ╚═╝  ╚═╝  ╚═════╝  ╚═╝               ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

<p align="center">
  <strong>CRUD de Categorías de Productos</strong>
  <br>
  <sub>Proyecto final — Programación Web · IPN</sub>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Spring%20Boot-4.0.5-brightgreen?style=for-the-badge&logo=springboot" alt="Spring Boot">
  <img src="https://img.shields.io/badge/Angular-21.2-red?style=for-the-badge&logo=angular" alt="Angular">
  <img src="https://img.shields.io/badge/Java-17-orange?style=for-the-badge&logo=coffeescript" alt="Java">
  <img src="https://img.shields.io/badge/PostgreSQL-docker-blue?style=for-the-badge&logo=postgresql" alt="PostgreSQL">
</p>

---

## Que es esto?

Un CRUD de categorias de productos hecho con el corazon (y con Spring Boot + Angular).  
Backend en Java con Spring Boot 4, frontend en Angular 21 standalone y zoneless.  
Base de datos PostgreSQL en Docker para produccion y H2 en memoria para desarrollo local.

La idea es simple: **crear, leer, actualizar y eliminar categorias** de productos.  
Nada del otro mundo, pero bien hecho. 

---

## Estructura del proyecto

```
MiniInventario/
│
├── backend/                  # Spring Boot 4.0.5
│   ├── core/entidades/       # Modelos JPA
│   ├── features/
│   │   ├── categoria/        # CRUD de categorias
│   │   ├── producto/         # CRUD de productos
│   │   ├── Archivo/          # Subida y descarga de archivos
│   │   └── mail/             # Envio de correos
│   └── Dockerfile + compose  # Contenedores listos
│
└── frontend/                 # Angular 21.2 (standalone)
    ├── components/features/  # Componentes principales
    │   └── categoria/        # Lista y formulario
    ├── shared/               # Header, Footer, Home
    ├── service/              # Conexion con el backend
    └── model/                # Modelo de datos
```

---

## Como levantar todo

### 1. Backend

#### Modo desarrollo (H2 en memoria, sin PostgreSQL)

```bash
cd backend
mvn spring-boot:run -Dspring-boot.run.profiles=dev
```

El backend arranca en `http://localhost:8080`.  
Swagger UI disponible en `http://localhost:8080/documentacion/swagger-ui.html`.

#### Modo produccion (PostgreSQL en Docker)

```bash
cd backend
docker compose up -d                          # levanta PostgreSQL
$env:DB_USER="admin"                          # variables de entorno
$env:DB_PASSWORD="admin"
$env:DB_URL="jdbc:postgresql://localhost:5173/testdb"
mvn spring-boot:run
```

### 2. Frontend

```bash
cd frontend
npm install
npm start
```

El frontend arranca en `http://localhost:4200`.

---

## Endpoints disponibles

| Verbo     | Ruta                                        | Que hace                        |
|-----------|---------------------------------------------|---------------------------------|
| `GET`     | `/api/v1/categorias/categoria`              | Trae todas las categorias       |
| `GET`     | `/api/v1/categorias/categoria/{id}`         | Trae una categoria por ID       |
| `POST`    | `/api/v1/categorias/categoria`              | Crea una categoria nueva        |
| `PUT`     | `/api/v1/categorias/categoria/{id}`         | Actualiza una categoria         |
| `DELETE`  | `/api/v1/categorias/categoria/{id}`         | Elimina una categoria           |

---

## Tecnologias usadas

| Capa      | Tecnologia                            |
|-----------|---------------------------------------|
| Backend   | Spring Boot, Spring Data JPA, Lombok  |
| Frontend  | Angular 21, Signals, Bootstrap 5      |
| Base datos| PostgreSQL (prod), H2 (dev)           |
| Testing   | JUnit 5, Vitest                       |
| Extras    | Swagger, SweetAlert2, Docker          |

---

Hecho con ❤️, cafe y trasnochadas.  
Proyecto academico — **IPN**.

