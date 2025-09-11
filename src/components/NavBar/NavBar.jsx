import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";


export default function NavBar() {
return (
<header className="nav">
<div className="nav-inner">
<Link to="/" className="brand">🍕 La Torre de Pizza</Link>
<nav>
<ul className="menu">
<li><NavLink to="/">Todo</NavLink></li>
<li><NavLink to="/category/pizzas">Pizzas</NavLink></li>
<li><NavLink to="/category/empanadas">Empanadas</NavLink></li>
<li><NavLink to="/cart">Carrito</NavLink></li>
<li><NavLink to="/checkout">Checkout</NavLink></li>
</ul>
</nav>
<CartWidget />
</div>
</header>
);
}