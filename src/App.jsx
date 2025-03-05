import { useState } from 'react';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProductModal from './components/ProductModal';
import Products from './components/Products';
import './styles/App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Products onProductClick={handleProductClick} />
      <AboutUs />
      <Footer />
      {isModalOpen && selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;