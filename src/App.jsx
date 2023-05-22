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


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
        <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        <Route path='*' element={ <h2>Sitio en construccion</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
