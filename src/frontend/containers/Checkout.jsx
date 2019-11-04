import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions';
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  const { cart, cartTotal } = props;

  const handleRemoveFromCart = (id) => {
    props.removeFromCart(id);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map(item => (
          <div className="Checkout-item" key={`cart-${item.cartId}`}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
$
                {item.price}
              </span>
            </div>
            <button
              type="button"
              onClick={() => handleRemoveFromCart(item.cartId)}
            >
              <i role="img" className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>{`$${cartTotal}`}</h4>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    cartTotal: state.cart.reduce((acc, act) => acc + act.price, 0),
  };
};

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Checkout);
