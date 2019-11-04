import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import '../styles/components/Products.styl';

const Products = (props) => {
  const { products } = props;

  // console.log('products_juan: ' + props);

  // props.products.map(function(x) {
  //   console.log('juan91: ' + x.title);
  // });

  // const handleAddToCart = product => {
  //   props.addToCart(product);
  // };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <div className="Products-item" key={product._id}>
            <div className="Products-item-info">
              <h2>
                {product.title}
                <span>$price</span>
              </h2>
              <p>description</p>
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
