import { useState, createContext } from "react";

export const CarritoContext = createContext({ cart: [] });

export const CarritoProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //console.log(cart);

  const addItem = (item, cantidad) => {
    const isInCart = cart.find(prod => prod.item.id === item.id);

    if (!isInCart) {
      setCart(prev => [...prev, { item, cantidad }]);
    } else {
      const updatedCart = cart.map(prod => {
        if (prod.item.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad }
        }else {
          return prod;
        }
      });

      setCart(updatedCart);
    }
  };

  

  const removeItem = (id) => {
    const updatedCart = cart.filter(prod => prod.item.id !== id);
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
