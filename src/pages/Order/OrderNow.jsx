import "./OrderNow.css";

function OrderNow() {
  return (
    <div className="order-wrapper">
      <div className="order-box">

        <h1 className="order-title">Order Now</h1>
        <p className="order-subtitle">Quick • Simple • Secure</p>

        {/* <form className="order-form"> */}

          <div className="form-group">
            <label>Your Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter phone number" />
          </div>

          <div className="form-group">
            <label>Product Name</label>
            <input type="text" placeholder="Which product do you want?" />
          </div>

          <div className="form-group">
            <label>Quantity</label>
            <input type="number" min="1" placeholder="Enter quantity" />
          </div>

          <button type="submit" className="order-btn">
            Confirm Order
          </button>

        {/* </form> */}
      </div>
    </div>
  );
}

export default OrderNow;
