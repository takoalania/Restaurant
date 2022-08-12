import './reset.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Cart from './Pages/Cart';
import ProductPage from './Pages/ProductPage';
import Header from './Components/Header';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" >
            <Route index element={<Home/>}></Route>
            <Route path="contact" element={<Contact/>}></Route>
            <Route path="menu" element={<Menu/>}></Route>
            <Route path="cart" element={<Cart/>}></Route>
            <Route path="menu/:productID" element={<ProductPage/>}></Route>
            <Route path="cart/:productID" element={<ProductPage/>}></Route>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
