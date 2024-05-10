
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Fotter from './Components/Footer/Fotter';
import men_banner  from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />}/>
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Fotter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
