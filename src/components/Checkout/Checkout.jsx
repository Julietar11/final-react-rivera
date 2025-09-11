import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { currency } from "../../utils/format";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


export default function Checkout() {
const { items, totalPrice, clear } = useCart();
const navigate = useNavigate();
const [form, setForm] = useState({ nombre: "", telefono: "", email: "" });


const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


const submit = (e) => {
e.preventDefault();
if (!form.nombre || !form.telefono || !form.email) return;


const orderId = Math.random().toString(36).slice(2, 10).toUpperCase();


Swal.fire({
title: "¡Compra confirmada!",
html: `Gracias ${form.nombre}. Total: <b>${currency(totalPrice)}</b><br/> N.º de orden: <b>${orderId}</b>`,
icon: "success"
}).then(() => {
clear();
navigate("/");
});
};


if (items.length === 0) {
return <p>No hay productos en el carrito.</p>;
}


return (
<section>
<h2>Checkout</h2>
<p>Total a pagar: <b>{currency(totalPrice)}</b></p>


<form onSubmit={submit} className="card" style={{ padding: 16 }}>
<div className="flex">
<input name="nombre" placeholder="Nombre" onChange={onChange} value={form.nombre} />
<input name="telefono" placeholder="Teléfono" onChange={onChange} value={form.telefono} />
<input name="email" placeholder="Email" onChange={onChange} value={form.email} />
</div>
<button className="btn primary mt" type="submit">Confirmar compra</button>
</form>
</section>
);
}