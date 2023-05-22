import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'

const ItemDetail = ({id, description, category, price, img, stock}) => {
  
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  
  const {addItem} = useContext(CarritoContext);
  console.log(addItem);
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log(` Se han agregado al carrito : ${cantidad} productos!`);

    const item = {id, description, price};
    addItem(item, cantidad);
  }

  return (
    <div className='contenedor-item'>
      <img src={img} alt={description} />
      <div className="contenedor-detalle">
      <h2>{description}</h2>
      <strong>$ {price}</strong>
      <p>ID del producto: {id} </p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum numquam accusantium ad officia quas quam officiis, tenetur facilis debitis qui?</p>
      {
        agregarCantidad > 0 ? (<Link to="/cart" > Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
      </div>
    </div>
  )
}

export default ItemDetail
