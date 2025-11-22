import { useSelector } from "react-redux";
import { Link } from "react-router";

function Cart() {
  const cartSelector = useSelector((state) => state.cart.items);
  console.log(cartSelector.length);

  return (
    <div className="cart-1">
      <Link to="/cart-list">
        <span className="cart-icon">🛒</span>
        <span className="cart-count">
          {cartSelector.length ? cartSelector.length : 0}
        </span>
      </Link>
    </div>
  );
}
export default Cart;
