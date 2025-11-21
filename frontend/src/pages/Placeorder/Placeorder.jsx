import React from 'react'
import './Placeorder.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const Placeorder = () => {
  const {getTotalCartAmount}=useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className="placeorder-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Enter your email'/>
        <input type="text" placeholder='Enter your street address'/>
        <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Enter Zipcode'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Enter your contact number' />
      </div>
      <div className="placeorder-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
           <div className="carttotal-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="carttotal-details">
             <p> Delivery fees</p>
             <p>₹{getTotalCartAmount()===0?0 :2 }</p>
            </div>
            <hr />
            <div className="carttotal-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount(+2)}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder
