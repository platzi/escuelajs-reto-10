import { useEffect, useState } from 'react';

const newState = [
  {
    id: '3',
    image: 'https://arepa.s3.amazonaws.com/mug.png',
    title: 'Mug',
    price: 10,
    description: 'bla bla bla bla bla',
  },
];

const usePlatziProducts = (API, preloadedProducts) => {
  const [baseProducts, setProducts] = useState(preloadedProducts);

  useEffect(() => {
    setProducts(newState);
  }, []);

  return baseProducts;
};

export default usePlatziProducts;
