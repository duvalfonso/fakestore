import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  const { idItem } = useParams();

  useEffect(() => {
    const newDoc = doc(db, "productos", idItem);

    getDoc(newDoc)
      .then((res) => {
        const data = res.data();
        const newProduct = { id: res.id, ...data };
        setProducto(newProduct);
      })
      .catch((err) => console.error(err));
  }, [idItem]);

  return (
    <div className="wrapper">
      <ItemDetail {...producto} />
    </div>
  );
};

export default ItemDetailContainer;
