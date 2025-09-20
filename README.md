# Pizza Argenta! La Torre de Pizza
SPA creado con React JS, un e-commerce de pizzas y empanadas listas para ser pedidas

## Instalacion 
Instrucciones para instalar y configurar el proyecto
```bash
git clone https://github.com/Julietar11/final-react-rivera.git
cd pizza-argenta-codehouse
npm install
```
## Herramientas
Se utilizo para el proyecto conocimientos adquiridos en el curso sobre
·React app
·Sweet alert 
·Firestore (SDK oculto en .env)
·HTML, CSS, JS


## Caracteristicas

-Facil de instalar
-Interfaz Amigable

## Contribucion 
 Instrucciones para contribuir 
 1. Haz un fork del proyecto
 2. Crea una rama
 3. Realiza cambios y haz commit 
 4. Sube tu rama haciendo push
 5. Abre un Pull Request

## Estructura del proyecto
 Componentes 
 src/
├─ assets/                      # imágenes locales 
├─ components/
│  ├─ NavBar/                   # navegación principal + CartWidget
│  ├─ ItemListContainer/        # contenedor de listado
│  ├─ ItemList/                 # lista
│  ├─ ItemCard/                 # tarjeta
│  ├─ ItemDetailContainer/      # contenedor de detalle
│  ├─ ItemDetail/               # vista detalle + ItemCount
│  ├─ ItemCount/                # selector de cantidad con validaciones
│  ├─ Cart/                     # carrito
│  └─ Checkout/                 # formulario y confirmación
├─ context/CartContext.jsx      # estado global del carrito (persistencia localStorage)
├─ data/products.js             # mock local con imports de imágenes
├─ services/firebase.js         # init Firebase (usa .env oculto) 
├─ utils/format.js 


## Deploy
-[Url del proyecto creado con firebase](https://pizza-argenta.firebaseapp.com/)

