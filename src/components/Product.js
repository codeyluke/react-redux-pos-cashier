import React, { Component } from "react";

class Product extends Component {
  render() {
    const { products, addSelectedProductToCart } = this.props;

    const productsList = Object.keys(products).length ? (
      Object.entries(products).map(([key, value]) => {
        return (
          <div
            className="card"
            key={key}
            style={{ width: "30%" }}
            onClick={() => addSelectedProductToCart(key)}
          >
            <div className="card-body">
              <p>{value.productName}</p>
            </div>
          </div>
        );
      })
    ) : (
      <p>No Products</p>
    );

    return (
      <div className="card">
        <div className="card-body">
          <h3>Products</h3>
          <hr />
          <div className="d-flex">{productsList}</div>
        </div>
      </div>
    );
  }
}

export default Product;
