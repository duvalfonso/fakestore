import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { getProductos, getProductosPorCategoria } from "../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { idCategory } = useParams();

  useEffect(() => {

    const funcionProductos = idCategory ? getProductosPorCategoria : getProductos

    funcionProductos(idCategory)
      .then(res => setProductos(res))
      .catch(err => console.error(err))
    
  }, [idCategory]);

  return (
    <div className="wrapper">
      <h2 className="titulo">Productos</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
