import Cart from "./components/Cart.jsx";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Checkout from "./components/UI/Checkout.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";
import {UserProgressContextProvider} from './store/UserProgressContext.jsx'

function App() {
  return ( 
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header/>
        <Meals/>
        <Cart/>
        <Checkout/>
      </CartContextProvider>
    </UserProgressContextProvider> 
  );
}

export default App;
