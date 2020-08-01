import React, { Component } from "react";
import Summary from "./Summary";

class Cart extends Component {
  state = {};

  render() {
    const { selectedProducts } = this.props;

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
                <p>{value.quantity}</p>
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
          <Summary />
        </div>
      </div>
    );
  }
}

export default Cart;
