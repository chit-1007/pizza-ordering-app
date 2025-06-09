import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../features/cartSlice";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Cart.css";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const grandTotal = cartItems.reduce(
    (total, item) => total + item.unitPrice * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <Link to="/menu" className="back-link">← Back to menu</Link>
      <h2 className="cart-title">Your Cart</h2>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">Your cart is empty</div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <span className="cart-item-name">{item.name} (x{item.quantity})</span>
                  <span className="cart-item-price">${(item.unitPrice * item.quantity).toFixed(2)}</span>
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => dispatch(removeItem(item))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <p className="total-price">Total: ${grandTotal.toFixed(2)}</p>
          </div>
          
          <div className="cart-buttons">
            <button 
              className="clear-btn"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
            <Link to="/" className="checkout-btn">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
      
      <Footer/>
    </div>
  );
}

export default Cart;