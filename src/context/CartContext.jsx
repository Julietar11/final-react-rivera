import { createContext, useContext, useMemo, useState, useEffect } from "react";


const CartContext = createContext();
export const useCart = () => useContext(CartContext);


const STORAGE_KEY = "pizza-argenta:cart";


export function CartProvider({ children }) {

const [items, setItems] = useState(() => {
try {
const raw = localStorage.getItem(STORAGE_KEY);
return raw ? JSON.parse(raw) : [];
} catch {
return [];
}
});



useEffect(() => {
localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}, [items]);


const addItem = (product, quantity) => {
setItems(prev => {
const exists = prev.find(p => p.id === product.id);
if (exists) {
return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p);
}
return [...prev, { ...product, quantity }];
});
};


const removeItem = (id) => setItems(prev => prev.filter(p => p.id !== id));
const clear = () => setItems([]);


const totalQuantity = useMemo(() => items.reduce((acc, p) => acc + p.quantity, 0), [items]);
const totalPrice = useMemo(() => items.reduce((acc, p) => acc + p.quantity * p.price, 0), [items]);


const value = { items, addItem, removeItem, clear, totalQuantity, totalPrice };
return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}