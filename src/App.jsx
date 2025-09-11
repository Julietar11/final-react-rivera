import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { CartProvider } from "./context/CartContext";
import "./App.css";


export default function App() {
return (
<CartProvider>
<NavBar />
<main className="container">
<Routes>
<Route path="/" element={<ItemListContainer greeting="Todas las opciones" />} />
<Route path="/category/:categoryId" element={<ItemListContainer />} />
<Route path="/item/:id" element={<ItemDetailContainer />} />
<Route path="/cart" element={<Cart />} />
<Route path="/checkout" element={<Checkout />} />
<Route path="*" element={<Navigate to="/" replace />} />
</Routes>
</main>
</CartProvider>
);
}