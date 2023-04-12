import React from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const Product = () => {
    const location = useLocation();
    const query =  new URLSearchParams(location.search)
  return (
    <div>
      <h1>Product</h1>
      <h2>{query.get("category")}</h2>
      <h2>{query.get("brand")}</h2>
    </div>
  );
}

export default Product
