import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../data/products"; 
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer({ greeting = "" }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId).then(res => {
      setItems(res);
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <section>
      <h2>{categoryId ? categoryId.toUpperCase() : greeting}</h2>
      <ItemList items={items} />
    </section>
  );
}
