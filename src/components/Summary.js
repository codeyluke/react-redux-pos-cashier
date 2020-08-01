import React, { Component } from "react";

class Summary extends Component {
  state = {};
  render() {
    return (
      <div className="card" style={{ margin: "1rem 0" }}>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <p>Subtotal</p>
            </div>
            <div className="col-6 text-right">
              <p>RM 600</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p>No. of items</p>
            </div>
            <div className="col-6 text-right">
              <p>3</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p>Tax (6%)</p>
            </div>
            <div className="col-6 text-right">
              <p>RM 6</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p>Service Charge (10%)</p>
            </div>
            <div className="col-6 text-right">
              <p>RM 6</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6">
              <p>Grand Total</p>
            </div>
            <div className="col-6 text-right">
              <p>RM 6</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
