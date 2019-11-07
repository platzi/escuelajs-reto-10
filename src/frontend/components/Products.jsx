import React from 'react';
import { connect } from 'react-redux';
import { addToCart, updateProductsList } from '../actions';
import useProducts from '../hooks/useProducts';
import '../styles/components/Products.styl';

const API_URL = 'https://nemo1co-reto09.now.sh/api/products/';

const Products = (props) => {
  const { products } = props;

  const handleAddToCart = (product) => {
    props.addToCart(product);
  };

  const productsDB = useProducts(API_URL, products);
  props.updateProductsList(productsDB);

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <div className="Products-item" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="Products-item-info">
              <h2>
                {product.title}
                <span>
$
                  {product.price}
                </span>
              </h2>
              <p>{product.description}</p>
            </div>
            <button type="button" onClick={() => handleAddToCart(product)}>
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart,
  updateProductsList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
