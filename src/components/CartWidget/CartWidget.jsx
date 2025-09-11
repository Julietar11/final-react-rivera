import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";


export default function CartWidget() {
const { totalQuantity } = useCart();
return (
<Link to="/cart" className="flex" style={{ fontWeight: 700 }}>
🛒 <span>{totalQuantity}</span>
</Link>
);
}