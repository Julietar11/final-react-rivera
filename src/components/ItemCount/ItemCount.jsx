import { useState } from "react";
import Swal from "sweetalert2";


export default function ItemCount({ initial = 1, stock = 0, onAdd }) {
const [count, setCount] = useState(initial);


const inc = () => setCount(c => (c < stock ? c + 1 : c));
const dec = () => setCount(c => (c > 1 ? c - 1 : c));
const add = () => {
if (stock === 0) {
Swal.fire({
title: "Sin stock",
text: "Actualmente no hay unidades disponibles",
icon: "error",
timer: 1500,
showConfirmButton: false
});
return;
}
if (count > stock) {
Swal.fire({ title: "Stock insuficiente", icon: "warning", timer: 1200, showConfirmButton: false });
return;
}
onAdd(count);
};


return (
<div className="flex mt">
<button className="btn ghost" onClick={dec} disabled={count <= 1}>-</button>
<span style={{ minWidth: 24, textAlign: "center" }}>{count}</span>
<button className="btn ghost" onClick={inc} disabled={count >= stock}>+</button>
<button className="btn primary" onClick={add} disabled={stock === 0}>Agregar</button>
</div>
);
}