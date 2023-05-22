import { useState, createContext } from "react";

export const CarritoContext = createContext({ cart: [] });

export const CarritoProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addItem = (item, cantidad) => {
    const productoExistente = cart.find(prod => prod.item.id === item.id);
    if (!productoExistente(item.id)) {
      setCart((prev) => [...prev, { item, cantidad }]);
    } else {
      console.log("Producto ya agregado!");
    }
  };

  // const isInCart = (id) => {
  //   return cart.some((prod) => prod.id === id);
  // };

  const removeItem = (id) => {
    const updatedCart = cart.filter((prod) => prod.id !== id);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CarritoContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CarritoContext.Provider>
  );
};
