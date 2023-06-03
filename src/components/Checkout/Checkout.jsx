import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
  const { cart, clearCart } = useContext(CarritoContext);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  const [error, setError] = useState("");
  const [idOrder, setIdOrder] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (!name || !lastname || !phone || !email || !emailConfirmation) {
      setError("Por favor complete todos los campos");
      return;
    }

    if (email !== emailConfirmation) {
      setError("Los campos del email no coinciden");
    }

    const order = {
      items: cart.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.description,
        cantidad: producto.cantidad,
      })),
      total: cart.reduce(
        (total, producto) => total + producto.item.precio * producto.cantidad,
        0
      ),
      name,
      lastname,
      phone,
      email,
    };

    addDoc(collection(db, "ordenes"), order)
      .then((docRef) => {
        setIdOrder(docRef.id);
        clearCart();
      })
      .catch((err) => {
        console.error("Error al crear la orden", err);
        setError("Se produjo un error al crear la orden, intente más tarde");
      });
  };

  return (
    <div className="wrapper">
      <h2>Checkout</h2>
      <form onSubmit={submitHandler}>
        {cart.map((producto) => (
          <div key={producto.item.id}>
            <p>
              {" "}
              {producto.item.description} x {producto.cantidad}{" "}
            </p>
            <p> Precio: $ {producto.item.price} </p>
            <hr />
          </div>
        ))}
        <hr />
        <div>
          <label htmlFor=""> Nombre </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor=""> Apellido </label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor=""> Telefono </label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor=""> Email </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor=""> Email confirmation </label>
          <input
            type="email"
            value={emailConfirmation}
            onChange={(e) => setEmailConfirmation(e.target.value)}
          />
        </div>

        {error && <p> {error} </p>}

        <button type="submit"> Finalizar orden </button>

        {idOrder && (
          <strong>
            ¡Gracias por tu compra! Tu numero de orden es: {idOrder}{" "}
          </strong>
        )}
      </form>
    </div>
  );
};

export default Checkout;
