import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart } = useContext(CarritoContext);

  const totalCantidad = cart.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );

  const total = cart.reduce(
    (total, producto) => total + producto.item.price * producto.cantidad,
    0
  );

  if (totalCantidad === 0) {
    return (
      <>
        <div className="wrapper">
          <h2>No hay productos en el carrito</h2>
          <Link to={"/"}> Seguir Comprando </Link>
        </div>
      </>
    );
  }

  return (
    <div className="wrapper">
      <h2>Carrito de compras</h2>
      {cart.map((producto) => (
        <CartItem key={producto.item.id} {...producto} />
      ))}

      <h3> Cantidad Total: {totalCantidad} </h3>
      <h3> Total: $ {total} </h3>
      <button onClick={() => clearCart()}> Vaciar Carrito </button>
      <Link to={"/checkout"}> Finalizar Compra</Link>
    </div>
  );
};

export default Cart;
