**Sistema Distribuido Basado en Microservicios**

Este proyecto implementa un sistema distribuido basado en microservicios utilizando **Node.js**, **Docker**, y **MongoDB**. El sistema incluye servicios para la autenticación de usuarios mediante **JWT** y la gestión de productos, con comunicación segura y containerización de aplicaciones.

**Características Principales**
- **Autenticación distribuida**: Gestión centralizada de usuarios utilizando JWT.
- **Microservicios independientes**: Servicios modulares para autenticación y productos.
- **Containerización**: Despliegue con Docker y Docker Compose.
- **Base de datos compartida**: Conexión a MongoDB desde servicios específicos.
- **RESTful API**: Diseño escalable y seguro para la comunicación entre servicios.


**Estructura del Proyecto**

procesos/
│
├── docker-compose.yml       # Configuración de contenedores
├── init.mongo.js            # Script de inicializacion
├── package.js               # Script inicar servidor con nodemon y las dependencias
├── package-lock.js          # Especificar dependencias instalads
├── auth-service/            # Servicio de autenticación
│   ├── models/              # Modelos de base de datos
│   │   └── user.js          # Modelo del usuario
│   ├── routes/              # Rutas del servicio
│   │   └── authRoutes.js    # Rutas de autenticación
│   ├── .env                 # Variables de entorno
│   ├── dockerfile           # Dockerfile para el servicio
│   ├── package.json         # Configuración del proyecto Node.js
│   ├── server.js            # Archivo principal del servicio
│
├── product_service/         # Servicio de productos
│   ├── dockerfile           # Dockerfile para el servicio
│   ├── index.js             # Archivo principal del servicio
│   ├── package.json         # Configuración del proyecto Node.js
│
└── shared/                  # Código compartido entre servicios
    └── package.json

## **Requisitos Previos**
Antes de ejecutar el proyecto, asegúrate de tener instalado lo siguiente:

- **Docker** y **Docker Compose**
- **Node.js** (opcional, si deseas ejecutar los servicios localmente)
- **Git** para clonar el repositorio

---

## **Cómo Usar**

### **1. Clonar el Repositorio**
```bash
git clone <URL_DEL_REPOSITORIO>
cd procesos
```

### **2. Configurar Variables de Entorno**
Edita el archivo `.env` en el servicio de autenticación (`auth-service`):
```env
MONGO_URI=mongodb://mongo:27017/auth-db
```

### **3. Iniciar el Proyecto con Docker**
Ejecuta el siguiente comando en la raíz del proyecto:
```bash
docker-compose up --build
```

Esto levantará los siguientes servicios:
- **MongoDB**: Base de datos en `localhost:27017`.
- **Auth-Service**: Servicio de autenticación en `http://localhost:4000`.
- **Product-Service**: Servicio de productos en `http://localhost:5000`.

---

## **Servicios**

### **Auth-Service**
Maneja el registro, inicio de sesión y la generación de tokens JWT.

#### **Endpoints**
| Método  | Endpoint        | Descripción                     |
|---------|-----------------|---------------------------------|
| `POST`  | `/auth/register` | Registra un nuevo usuario.      |
| `POST`  | `/auth/login`    | Inicia sesión y genera un token.|

#### **Modelo de Usuario**
```json
{
  "name": "Nombre del usuario",
  "email": "email@example.com",
  "password": "contraseña123"
}
```

### **Product-Service**
Este servicio está diseñado para manejar operaciones relacionadas con productos. Actualmente, está en desarrollo.

---

## **Pruebas**

### **Colección de Postman**
Incluye una colección de pruebas para los endpoints disponibles. Importa el archivo `postman_collection.json` desde la raíz del proyecto en Postman.

### **Pruebas Manuales**
1. Registra un usuario:
   ```json
   POST /auth/register
   {
     "name": "John Doe",
     "email": "john@example.com",
     "password": "password123"
   }
   ```
2. Inicia sesión y obtén un token JWT:
   ```json
   POST /auth/login
   {
     "email": "john@example.com",
     "password": "password123"
   }
   ```
   **Respuesta esperada:**
   ```json
   {
     "token": "eyJhbGciOiJIUzI1NiIsInR..."
   }
   ```

---

## **Diagrama de Arquitectura**
A continuación, se presenta un diagrama que muestra cómo los servicios interactúan entre sí:

```plaintext
               +-------------------+
               |   auth-service    |
               |-------------------|
               | - Registro/Login  |
               | - Verificar Token |
               +-------------------+
                     |     ^
                     |     |
   Valida Token      |     | Genera Token
                     v     |
               +-------------------+
               | product_service   |
               |-------------------|
               | - CRUD Productos  |
               | - Middleware JWT  |
               +-------------------+
                     |
                     |
               +-------------------+
               |      MongoDB      |
               +-------------------+
```


**Guía de Despliegue**
**1. Configurar Variables de Entorno**
Edita los archivos `.env` para ajustar configuraciones como la URI de MongoDB y otras claves sensibles.

**2. Desplegar con Docker Compose**
docker-compose up --build

**3. Acceso a los Servicios**
- **Auth-Service:** `http://localhost:4000`
- **Product-Service:** `http://localhost:5000`


**Tecnologías Utilizadas**
- **Node.js**: Framework de JavaScript para construir los microservicios.
- **Express.js**: Framework para manejar las rutas y controladores.
- **MongoDB**: Base de datos NoSQL para almacenar datos.
- **Docker**: Containerización de los servicios para despliegue.
- **JWT**: Autenticación segura con tokens.
- **Postman**: Herramienta para pruebas de API.

**Contribuciones**
Si deseas contribuir:
1. Realiza un fork del repositorio.
2. Crea una nueva rama.
3. Envía un pull request con tus cambios.

  Licencia
Este proyecto está bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más información.
