import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"


const CartItem = ( {item, cantidad} ) => {
  const {removeItem} = useContext(CarritoContext);

  return (
    <div>
      <h4> {item.description} </h4>
      <p> Cantidad: {cantidad} </p>
      <p> Precio: $ {item.price} </p>
      <button onClick={() => removeItem(item.id)} > Eliminar </button>
      <hr />
    </div>
  )
}

export default CartItem
