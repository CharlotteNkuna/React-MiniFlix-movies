import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total
  const total = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  if (cartItems.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h3>Your cart is empty 🛍️</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">🛒 Your Shopping Cart</h2>
      <div className="row">
        {cartItems.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={item.image}
                alt={item.title}
                className="card-img-top"
                style={{ height: "250px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="fw-bold">R{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button
                  className="btn btn-danger w-100"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <h4>Total: R{total}</h4>
        <button
          className="btn btn-warning mt-2 me-2"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
        <button className="btn btn-success mt-2">Checkout</button>
      </div>
    </div>
  );
}
