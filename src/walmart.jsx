import React from "react";


//import "./styles.css";


export class App2 extends React.Component {
  prod = ["Product1", "Product2", "Product3"];

  state = {
    cart: []
  };

  addCart(index) {
    this.setState({ cart: [...this.state.cart, this.prod[index]] });
  }

  render() {
    return (
      <div>
        {this.prod.map((message, index) => (
          <li key={index} onClick={() => this.addCart(index)}>
            {message}
          </li>
        ))}
        <div className="cart">{this.state.cart.join(", ")}</div>
      </div>
    );
  }
}

