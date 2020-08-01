import React, { Component } from "react";

import Product from "./Product";
import Cart from "./Cart";

class Cashier extends Component {
  state = {
    products: {
      3: { productName: "bubble tea", price: 780, categoryId: 1 },
      4: { productName: "purple tea", price: 1000, categoryId: 2 },
    },
    selectedProducts: {
      // 3: { productName: "bubble tea", quantity: 1 },
      // 4: { productName: "beer tea", quantity: 1 },
    },
  };

  addSelectedProductToCart = (productId) => {
    const selectedProducts = this.state.selectedProducts;

    if (selectedProducts[productId]) {
      let toUpdateQuantity = { ...this.state.selectedProducts };
      toUpdateQuantity[productId].quantity++;
      this.setState({
        selectedProducts: toUpdateQuantity,
      });
    } else {
      const selectedProduct = this.state.products[productId];
      let updatedSelectedProducts = selectedProducts;
      updatedSelectedProducts[productId] = {
        productName: selectedProduct.productName,
        price: selectedProduct.price,
        quantity: 1,
      };
      this.setState({
        selectedProducts: updatedSelectedProducts,
      });
    }
  };

  componentDidMount() {
    // console.log("componentDidMount", this.state);
  }

  componentDidUpdate() {
    console.log("state updated", this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 border border-primary">
            <Cart selectedProducts={this.state.selectedProducts} />
          </div>
          <div className="col-6 border border-primary">
            <Product
              products={this.state.products}
              addSelectedProductToCart={this.addSelectedProductToCart}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cashier;
