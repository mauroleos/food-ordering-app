import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHanlder = () => {
    setCartIsShown(true);
  };

  const hideCartHanlder = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHanlder} />}
      <Header onShowCart={showCartHanlder} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
