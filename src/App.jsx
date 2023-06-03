import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
    <CarritoProvider>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
        <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        <Route path='/cart' element={ <Cart />} />
        <Route path='/checkout' element={ <Checkout />} />
        <Route path='*' element={  <h2>Sitio en construccion</h2>} />
      </Routes>
      <Footer />
    </CarritoProvider>
    </BrowserRouter>
  );
}

export default App;
