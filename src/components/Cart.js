import React, { Component } from "react";
import Summary from "./Summary";

class Cart extends Component {
  render() {
    const {
      selectedProducts,
      clearCart,
      decreaseIncrementQuantity,
      addIncrementQuantity,
    } = this.props;

    const clearCartButton = (
      <button
        type="button"
        className="btn btn-danger mt-2"
        onClick={() => clearCart()}
      >
        Clear Cart
      </button>
    );

    const incrementButtonIcon = (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className="bi bi-plus-circle"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
        />
        <path
          fillRule="evenodd"
          d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
        />
        <path
          fillRule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
      </svg>
    );

    const decrementButtonIcon = (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className="bi bi-dash-circle"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
        <path
          fillRule="evenodd"
          d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    );

    const productInCart = Object.keys(selectedProducts).length ? (
      Object.entries(selectedProducts).map(([key, value]) => {
        return (
          <div className="card" key={key}>
            <div className="row">
              <div className="col-3">
                <p>{value.productName}</p>
              </div>
              <div className="col-3">
                <p>{value.price && (value.price / 100).toFixed(2)}</p>
              </div>
              <div className="col-3">
                <div className="d-flex">
                  <div
                    className="pr-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => decreaseIncrementQuantity(key)}
                  >
                    {decrementButtonIcon}
                  </div>
                  <div className="pr-2" style={{ cursor: "pointer" }}>
                    {value.quantity}
                  </div>
                  <div
                    className="pr-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => addIncrementQuantity(key)}
                  >
                    {incrementButtonIcon}
                  </div>
                </div>
              </div>
              <div className="col-3">
                <p>
                  {value.quantity &&
                    ((value.quantity * value.price) / 100).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <p>No item in cart</p>
    );
    return (
      <div className="card">
        <div className="card-body">
          <h3>POS Cashier</h3>
          <hr />
          <div className="row">
            <div className="col-3">
              <p>Product</p>
            </div>
            <div className="col-3">
              <p>Price (RM)</p>
            </div>
            <div className="col-3">
              <p>Quantity</p>
            </div>
            <div className="col-3">
              <p>Cost (RM)</p>
            </div>
          </div>
          {productInCart}
          {clearCartButton}
          <Summary />
        </div>
      </div>
    );
  }
}

export default Cart;
