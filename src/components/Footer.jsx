import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Footer.css"

function Footer() {
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const grandTotal = cartItems.reduce(
    (total, item) => total + item.unitPrice * item.quantity,0
  );

  const footerClass = itemCount > 0 ? "active-foot" : "foot";
  return (
    <footer className={footerClass}>
      <div>{itemCount} PIZZAS - ${grandTotal}</div>
      <Link to="/cart">
        OPEN CART
      </Link>
    </footer>
  );
}

export default Footer;