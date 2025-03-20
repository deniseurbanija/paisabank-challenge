# PaisaBank - Desafío Técnico 💳

## 📖 Descripción del Desafío
Después de evaluar riesgos en la primera etapa, se procederá a construir la plataforma **PaisaBank** en forma de una **Web Mobile** basada en las siguientes historias de usuario:

### 🚀 Historias de Usuario
- **Login | Inicio de Sesión:**
  - Como usuario de PaisaBank, quiero poder iniciar sesión en la plataforma para acceder a mis tarjetas y movimientos.
- **Home | Visualización de Tarjetas y Balances:**
  - Como usuario de PaisaBank, quiero poder ver todas mis tarjetas y sus respectivos balances para estar informado de mis gastos.
- **Home | Visualización de Movimientos Recientes:**
  - Como usuario de PaisaBank, quiero poder ver los últimos 5 movimientos de mis tarjetas para mantenerme al día con mis transacciones recientes.
- **Movimientos | Gestión de Movimientos:**
  - Como usuario de PaisaBank, quiero poder ver, buscar y filtrar entre todos mis movimientos para entender en profundidad los gastos que he realizado.

## 🛠️ Tecnologías y Herramientas implementadas

### 🌐 Frontend
- **Framework:** [Next.js](https://nextjs.org/) 
- **Estilos:**
  - [Tailwind CSS](https://tailwindcss.com/) (recomendado)
  - [Shadcn](https://ui.shadcn.com/)
  - Alternativamente: Styled Components o SCSS
- **Fuentes:**
  - [Poppins](https://fonts.google.com/specimen/Poppins)

### 🏗️ Backend
- **Lenguaje:** Node.js
- **Framework:** NestJS
- **Base de Datos:** Postgres junto con **TypeORM**

### 1️⃣ Clonar el Repositorio
```bash
 git clone https://github.com/tu-usuario/paisabank.git
 cd paisabank
```

### 2️⃣ Instalar Dependencias
```bash
 npm install
 # o
 yarn install
```

### 3️⃣ Configurar Variables de Entorno
Crear un archivo **.env** en la raíz del proyecto con las siguientes variables:
Frontend
```env
NEXT_PUBLIC_API_URL=your_api_url
```
Backend
```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
```

### 4️⃣ Iniciar el Proyecto
#### Para el Frontend:
```bash
 npm run dev
```
#### Para el Backend:
```bash
 npm run start
```

