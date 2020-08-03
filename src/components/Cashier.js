import React, { Component } from "react";
import { connect } from "react-redux";

import Product from "./Product";
import Cart from "./Cart";
import { getProducts } from "../store/actions/productActions";
import { addToCart, clearCart } from "../store/actions/cartActions";

class Cashier extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  componentDidUpdate() {
    console.log("props updated", this.props.cart);
  }

  addSelectedProductToCart = (productId) => {
    const selectedProducts = this.props.cart;
    if (selectedProducts[productId]) {
      let toUpdateQuantity = { ...this.props.cart };
      toUpdateQuantity[productId].quantity++;
      this.props.addToCart(toUpdateQuantity);
    } else {
      const selectedProduct = this.props.products[productId];
      let updatedSelectedProducts = selectedProducts;
      updatedSelectedProducts[productId] = {
        productName: selectedProduct.productName,
        price: selectedProduct.price,
        quantity: 1,
      };
      this.props.addToCart(updatedSelectedProducts);
    }
  };

  clearCart = () => {
    this.props.clearCart();
  };

  addIncrementQuantity = (selectedProductId) => {
    const selectedProducts = this.props.cart;
    if (selectedProducts[selectedProductId]) {
      let toUpdateQuantity = { ...this.props.cart };
      toUpdateQuantity[selectedProductId].quantity++;
      this.props.addToCart(toUpdateQuantity);
    }
  };

  decreaseIncrementQuantity = (selectedProductId) => {
    const selectedProducts = this.props.cart;
    if (selectedProducts[selectedProductId]) {
      let toUpdateQuantity = { ...this.props.cart };
      if (toUpdateQuantity[selectedProductId].quantity > 1) {
        toUpdateQuantity[selectedProductId].quantity--;
        this.props.addToCart(toUpdateQuantity);
      } else {
        const allowedKeys = Object.keys(selectedProducts).filter(
          (product) => product !== selectedProductId
        );

        const filteredProduct = Object.keys(selectedProducts)
          .filter((key) => allowedKeys.includes(key))
          .reduce((obj, key) => {
            obj[key] = selectedProducts[key];
            return obj;
          }, {});

        this.props.addToCart(filteredProduct);
      }
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 border border-primary">
            <Cart
              selectedProducts={this.props.cart}
              clearCart={this.clearCart}
              addIncrementQuantity={this.addIncrementQuantity}
              decreaseIncrementQuantity={this.decreaseIncrementQuantity}
            />
          </div>
          <div className="col-md-6 col-sm-12 border border-primary">
            <Product
              products={this.props.products}
              addSelectedProductToCart={this.addSelectedProductToCart}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.product.products,
    posts: state.product.posts,
    cart: state.cart.selectedProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
    addToCart: (product) => dispatch(addToCart(product)),
    clearCart: () => dispatch(clearCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cashier);
