import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/products";
import ItemDetail from "../ItemDetail/ItemDetail";


export default function ItemDetailContainer() {
const { id } = useParams();
const [item, setItem] = useState(null);


useEffect(() => { getProductById(id).then(setItem); }, [id]);


if (!item) return <p>Cargando...</p>;
return <ItemDetail item={item} />;
}