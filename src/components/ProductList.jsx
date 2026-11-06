import ProductCard from './ProductCard';

const ProductList = ({ products, onRemove }) => {
  if (!products || products.length === 0) {
    return <div id="product-list" />;
  }

  return (
    <div id="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default ProductList;
