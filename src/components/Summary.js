import React, { Component } from "react";
import { connect } from "react-redux";

class Summary extends Component {
  render() {
    let subTotal = 0;
    let totalItem = 0;
    let taxAmount = 0;
    let serviceChargeAmount = 0;
    let grandTotal = 0;

    let rawTaxAmount = 0;
    let rawServiceChargeAmount = 0;

    let serviceChargeRate = this.props.summary.service.rate;
    let taxRate = this.props.summary.tax.rate;

    if (this.props.cart) {
      Object.keys(this.props.cart).forEach((productId) => {
        let itemPrice = this.props.cart[productId].price;
        let itemQuantity = this.props.cart[productId].quantity;
        totalItem += itemQuantity;
        subTotal += itemPrice * itemQuantity;
      });
    }

    if (subTotal > 0 && taxRate > 0) {
      rawTaxAmount = subTotal * (taxRate / 100);
      taxAmount = (rawTaxAmount / 100).toFixed(2);
      grandTotal += rawTaxAmount / 100;
    }

    if (subTotal > 0 && serviceChargeRate > 0) {
      rawServiceChargeAmount = subTotal * (serviceChargeRate / 100);
      serviceChargeAmount = (rawServiceChargeAmount / 100).toFixed(2);
      grandTotal += rawServiceChargeAmount / 100;
    }

    grandTotal = (grandTotal + subTotal / 100).toFixed(2);

    return (
      <div className="card" style={{ margin: "1rem 0" }}>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <p>Subtotal</p>
            </div>
            <div className="col-6 text-right">
              <p>{subTotal > 0 ? (subTotal / 100).toFixed(2) : subTotal}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p>No. of items</p>
            </div>
            <div className="col-6 text-right">
              <p>{totalItem}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p>Tax ({taxRate}%)</p>
            </div>
            <div className="col-6 text-right">
              <p>{taxAmount}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p>Service Charge ({serviceChargeRate}%)</p>
            </div>
            <div className="col-6 text-right">
              <p>{serviceChargeAmount}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6">
              <p>Grand Total</p>
            </div>
            <div className="col-6 text-right">
              <p>RM {grandTotal}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.selectedProducts,
    summary: state.summary.surcharge,
  };
};

export default connect(mapStateToProps)(Summary);
