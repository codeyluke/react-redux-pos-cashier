import React, { Component } from "react";

import Product from "./Product";
import Summary from "./Summary";

class Cashier extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 border border-primary">
            <Summary />
          </div>
          <div className="col-6 border border-primary">
            <Product />
          </div>
        </div>
      </div>
    );
  }
}

export default Cashier;
