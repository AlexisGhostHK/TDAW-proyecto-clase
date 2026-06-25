# MiniInventario

CRUD de categorías de productos — Proyecto de Programación Web, IPN.

## Stack

| Capa      | Tecnología                 |
|-----------|----------------------------|
| Backend   | Spring Boot 4, Java 17     |
| Frontend  | Angular 21, Bootstrap 5    |
| Base datos| PostgreSQL / H2 (dev)       |

## Cómo correrlo

```bash
# Backend (modo dev con H2)
cd backend
mvn spring-boot:run -Dspring-boot.run.profiles=dev

# Frontend
cd frontend
npm install
npm start
```

## Endpoints

| Verbo    | Ruta                                      |
|----------|-------------------------------------------|
| GET      | /api/v1/categorias/categoria              |
| GET      | /api/v1/categorias/categoria/{id}         |
| POST     | /api/v1/categorias/categoria              |
| PUT      | /api/v1/categorias/categoria/{id}         |
| DELETE   | /api/v1/categorias/categoria/{id}         |
