import{ BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FeaturContainer from './components/FeaturContainer';
import SingleProduct from './pages/SingleProduct';
import Dashboard from './admin/pages/Dashboard';

function App() {
  return (
    <>
      <Router>
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about-us" element={<AboutUs />}></Route>
          <Route exact path="/contact-us" element={<ContactUs />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path="/products/:_id" element={<SingleProduct />}></Route>

          <Route exact path="/admin/dashboard" element={<Dashboard />}></Route>
        </Routes>
        <FeaturContainer/>
      </Router>
    </>
  );
}

export default App;
