import React from 'react'
import { useParams} from 'react-router-dom'

const ProductDetailsPage = () => {
    const params = useParams();

  return (
    <div>
      <h1>ProductDetailsPage</h1>
      <h2>{params.produtId}</h2>
    </div>
  );
}

export default ProductDetailsPage;
