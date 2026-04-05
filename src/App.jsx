import { useState } from 'react';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProductModal from './components/ProductModal';
import Products from './components/Products';
import ThemeContext from "./components/ThemeContext";
import CartProvider from './components/CartContext';
import Cart from './components/Cart';
import Contact from './components/Contact';
import HealthBenefits from './components/HealthBenefits';
import './styles/App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <ThemeContext>
        <CartProvider>
          <Navbar onCartToggle={handleCartToggle} onSearchChange={handleSearchChange} />
          <Hero />
          <Products onProductClick={handleProductClick} searchQuery={searchQuery} />
          <HealthBenefits />
          <AboutUs />
          <Contact />
          <Footer />
          <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          {isModalOpen && selectedProduct && (
            <ProductModal
              product={selectedProduct}
              onClose={() => setIsModalOpen(false)}
            />
          )}
        </CartProvider>
      </ThemeContext>
    </div>
  );
}

export default App;