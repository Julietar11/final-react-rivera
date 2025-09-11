import { useState } from "react";
import { useCart } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { currency } from "../../utils/format";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


export default function ItemDetail({ item }) {
const { addItem } = useCart();
const [addedQty, setAddedQty] = useState(0);


const handleAdd = (qty) => {
addItem(item, qty);
setAddedQty(qty);
Swal.fire({
title: "Agregado al carrito",
text: `${item.title} x${qty}`,
icon: "success",
timer: 1500,
showConfirmButton: false
});
};

if (item.stock === 0) {
return (
<article className="card">
<img src={item.img} alt={item.title} />
<div className="content">
<h3 className="title">{item.title}</h3>
<p>{item.description}</p>
<p className="price">Sin stock</p>
</div>
</article>
);
}

return (
<article className="card">
<img src={item.img} alt={item.title} />
<div className="content">
<h3 className="title">{item.title}</h3>
<p>{item.description}</p>
<p className="price">{currency(item.price)}</p>


{addedQty === 0 ? (
<ItemCount initial={1} stock={item.stock} onAdd={handleAdd} />
) : (
<div className="flex">
<Link className="btn primary" to="/cart">Ir al carrito</Link>
<Link className="btn ghost" to="/">Seguir comprando</Link>
</div>
)}
</div>
</article>
);
}