import { Routes,Route } from "react-router-dom"
import Home from './pages/Home';
import Product from './pages/Product';
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import About from './pages/About';
import Collection from './pages/Collection';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App