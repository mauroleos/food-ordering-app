import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHanlder = (item) => {};

  const removeItemfromCartHanlder = (id) => {};

  const cartContext = {
    item: [],
    totalAmount: 0,
    addItem: addItemToCartHanlder,
    removeItem: removeItemfromCartHanlder,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
