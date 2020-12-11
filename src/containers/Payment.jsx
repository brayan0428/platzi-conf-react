/* eslint-disable import/imports-first */
import React, { useContext } from 'react'
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';
import { PayPalButton } from 'react-paypal-button'
import { useHistory } from 'react-router-dom';

const Payment = () => {
  const history = useHistory()
  const {state, addOrder} = useContext(AppContext)
  const {cart, buyer} = state

  const paypalOptions = {
    clientId: 'AbW6EmJaimRgN4XWhMNjfi9YZG_o_i4LTCoFJri5c6iVjqLbONS2LYhnMGzYolVt_4-Z_ECyo3C_kjbF',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSucces = data => {
    console.log(data)
    if(data.status === 'COMPLETED'){
      const newOrder = {
        buyer,
        product:cart,
        payment:data
      }
      addOrder(newOrder)
      history.push('/checkout/success')
    }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        
        {
            cart.map(product => (
              <div className="Payment-item" key={product.id}>
                <div className="Payment-element">
                  <h4>{product.title}</h4>
                  <span>
                    $
                    {' '}
                    {product.price}
                  </span>
                </div>
              </div>
            ))
          }
        <div className="Payment-button">
          <PayPalButton 
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={cart.reduce((a,b) => a + b.price , 0)}
            onPaymentStart={() => console.log('Start payment')}
            onPaymentSuccess={data => handlePaymentSucces(data)}
            onPaymentError={error => console.log(error)}
            onPaymentCancel={data => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  )
}
 
export default Payment;