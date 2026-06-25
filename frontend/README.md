```
 ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ 
▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ 
▐░▌          ▐░▌          ▐░▌          ▐░▌       ▐░▌▐░▌          
▐░▌          ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌          ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄ 
▐░▌          ▐░░░░░░░░░░░▌▐░▌          ▐░▌       ▐░▌▐░░░░░░░░░░░▌
▐░▌          ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌          ▐░▌       ▐░▌ ▀▀▀▀▀▀▀▀▀█░▌
▐░▌          ▐░▌          ▐░▌          ▐░▌       ▐░▌          ▐░▌
▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ 
▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
 ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀ 
```

# Frontend — MiniInventario

**Angular 21.2 + Bootstrap 5 + SweetAlert2**

> Lo que ves en el navegador. La parte bonita del proyecto.

---

## Arrancar

```bash
npm install      # solo la primera vez
npm start        # dev server en http://localhost:4200
```

## Scripts utiles

| Comando        | Para que sirve                          |
|----------------|-----------------------------------------|
| `npm start`    | Servidor de desarrollo                  |
| `npm test`     | Tests con Vitest                        |
| `npm run build`| Build de produccion en `dist/`          |
| `npm run watch`| Build con watch                         |

---

## Arquitectura

### Standalone + Zoneless

- Componentes standalone con `imports` en el decorador.
- Sin `NgZone` ni `zone.js`. Usa `provideZonelessChangeDetection()`.
- Route params via `input<T>()` gracias a `withComponentInputBinding()`.

### Estado

- **Signals** para estado local (`signal()`, `input()`).
- **RxJS** para llamadas HTTP con `.subscribe()`.
- Template-driven forms con `FormsModule` + `[(ngModel)]`.

### Componentes

| Componente               | Selector                  | Ruta                    |
|--------------------------|---------------------------|-------------------------|
| `App`                    | `app-root`                | `/`                     |
| `Header`                 | `app-header`              | (global)                |
| `Home`                   | `app-home`                | `/home`                 |
| `ListaDeCategorias`      | `app-lista-de-categorias` | `/listaDeCategoria`     |
| `CategoriaForm`          | `app-categoria-form`      | `/categoriaForm`        |
| `CategoriaForm` (edit)   | `app-categoria-form`      | `/categoriaForm/:id`    |
| `Footer`                 | `app-footer`              | (solo en Home)          |
| `Calculadora`            | `app-calculadora`         | (no enrutada)           |

### Terceros

- **Bootstrap 5.3.8** — incluido en `angular.json`, disponible global.
- **SweetAlert2** — para dialogos de confirmacion y notificaciones.
- **FontAwesome 7.2** — iconos solidos (free-solid-svg-icons).

---

## Estilo de codigo

```typescript
// DI con inject(), nunca con constructor
private service = inject(CategoriaService);

// Signals para estado
categoriasRegistradas = signal<Categoria[]>([]);
idRuta = input<number>();

// Sin NgModules, imports en @Component
@Component({
  selector: 'app-mi-componente',
  imports: [FormsModule, RouterLink],
  templateUrl: './mi-componente.html',
  styleUrl: './mi-componente.css',
})
```

---

## Backend

El frontend se comunica con una API Spring Boot en:
```
http://localhost:8080/api/v1/categorias/categoria
```
(Configurado en `service/categoria-service.ts`)

Requiere CORS habilitado en el backend via `@CrossOrigin(origins = "http://localhost:4200")`.

---

Frontend del proyecto **MiniInventario** — Hecho en el IPN.
