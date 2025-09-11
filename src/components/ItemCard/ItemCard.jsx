import { Link } from "react-router-dom";
import { currency } from "../../utils/format";


export default function ItemCard({ item }) {
return (
<article className="card">
<img src={item.img} alt={item.title} />
<div className="content">
<div className="title">{item.title}</div>
<div>{item.description}</div>
<div className="flex justify-between">
<span className="price">{currency(item.price)}</span>
<Link className="btn ghost" to={`/item/${item.id}`}>Ver detalle</Link>
</div>
</div>
</article>
);
}