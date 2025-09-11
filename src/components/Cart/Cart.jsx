import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { currency } from "../../utils/format";


export default function Cart() {
const { items, removeItem, clear, totalPrice } = useCart();


if (items.length === 0) {
return (
<section>
<h2>Tu carrito está vacío</h2>
<Link className="btn primary" to="/">Volver a comprar</Link>
</section>
);
}


return (
<section>
<h2>Carrito</h2>
<div className="grid">
{items.map(p => (
<article key={p.id} className="card">
<img src={p.img} alt={p.title} />
<div className="content">
<div className="title">{p.title}</div>
<div>Cant: <b>{p.quantity}</b></div>
<div>Unitario: {currency(p.price)}</div>
<div>Subtotal: <b>{currency(p.price * p.quantity)}</b></div>
<button className="btn ghost" onClick={() => removeItem(p.id)}>Eliminar</button>
</div>
</article>
))}
</div>


<div className="flex justify-between mt" style={{ alignItems: "center" }}>
<button className="btn ghost" onClick={clear}>Vaciar</button>
<div style={{ fontSize: 18, fontWeight: 800 }}>Total: {currency(totalPrice)}</div>
<Link className="btn primary" to="/checkout">Ir a pagar</Link>
</div>
</section>
);
}