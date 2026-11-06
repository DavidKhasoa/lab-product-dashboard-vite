import { useState } from 'react';
import ProductList from './components/ProductList';

const initialProducts = [
  { id: 1, name: 'Laptop', price: 'Ksh 80,000', inStock: true },
  { id: 2, name: 'Phone', price: 'Ksh 55,000', inStock: false },
  { id: 3, name: 'Tablet', price: 'Ksh 70,000', inStock: true },
];

const App = () => {
  const [products, setProducts] = useState(initialProducts);

  const handleRemove = (id) => {
    setProducts((currentProducts) => currentProducts.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} onRemove={handleRemove} />
    </div>
  );
};

export default App;