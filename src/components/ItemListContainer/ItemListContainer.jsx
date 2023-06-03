import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, where, query } from "firebase/firestore";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { idCategory } = useParams();


  useEffect( () => {
    const myProducts = idCategory ? query(collection(db, "productos"), where("category", "==", idCategory)) : collection(db, "productos")

    getDocs(myProducts)
      .then(res => {
        const newProducts = res.docs.map(doc => {
          const data = doc.data()
          return {id:doc.id, ...data}
        })
        setProductos(newProducts);
      })
      .catch(err => console.error(err))
  }, [idCategory])

  return (
    <div className="wrapper">
      <h2 className="titulo">Productos</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
