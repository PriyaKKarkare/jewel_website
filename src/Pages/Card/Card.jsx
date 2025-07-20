import React, { useContext } from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Card = () => {
  const { removeFromCart, addToCart, jewel_list, cardItems, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
          <p>Add</p>
        </div>
        <br />
        <hr />
        {jewel_list.map((item) => {
          if (cardItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.img} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price.toFixed(2)}</p>
                  <p>{cardItems[item._id]}</p>
                  <p>${(item.price * cardItems[item._id]).toFixed(2)}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross' title="Remove one item">x</p>
                  <p>
                    <button
                      className="add-btn"
                      onClick={() => addToCart(item._id)}
                      style={{ padding: '4px 8px', cursor: 'pointer' }}
                      title="Add one more item"
                    >
                      +
                    </button>
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}

      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount().toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? '0.00' : '2.00'}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? '0.00' : (getTotalCartAmount() + 2).toFixed(2)}</b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='Promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
