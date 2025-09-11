import ItemCard from "../ItemCard/ItemCard";
import "../../App.css";


export default function ItemList({ items }) {
return (
<div className="grid">
{items.map(item => (<ItemCard key={item.id} item={item} />))}
</div>
);
}