import { useState, useEffect } from "react";
import { getDetalleProducto } from "../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  const {idItem} = useParams();

  useEffect( () => {
    getDetalleProducto(idItem)
      .then((res) => setProducto(res));
  }, [idItem]);


  return (
    <div className="wrapper">
      <ItemDetail {...producto} />
    </div>
  );
};

export default ItemDetailContainer;
