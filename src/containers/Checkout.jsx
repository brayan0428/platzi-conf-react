import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'
import '../styles/components/Checkout.css'

const Checkout = () => {

  const {state, removeFromCart} = useContext(AppContext)
  const {cart} = state

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos</h3> : <h3>Sin pedidos...</h3>}
        {
          cart.map(product => (
            <div className="Checkout-item" key={product.id}>
              <div className="Checkout-element">
                <h4>{product.title}</h4>
                <span>
                  $
                  {product.price}
                </span>
              </div>
              <button type="button" onClick={() => removeFromCart(product)}>
                <i className="fas fa-trash" />
              </button>
            </div>
          ))
        }
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>
            {`Precio total: $${cart.reduce((a,b) => a + b.price,0)}`}
          </h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
}
 
export default Checkout;