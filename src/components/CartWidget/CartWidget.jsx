import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const CartWidget = () => {
  const {cart} = useContext(CarritoContext);

  const totalCantidad = cart.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );

  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png"
  return (
    <Link to='/cart'>
      <img className='img-carrito' src={imgCarrito} alt="Carrito" />
      
      {
        totalCantidad > 0 && <span className='quantity'> {totalCantidad} </span>
      }
    </Link>
  )
}

export default CartWidget
