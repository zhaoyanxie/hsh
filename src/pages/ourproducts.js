import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { API_URL } from "../utils/configVar";

export default class OurProducts extends Component {
  constructor() {
    super();
    this.state = {
      allProducts: []
    };
  }
  // Todo: change to HOC
  componentDidMount() {
    const { pathname } = this.props.location;
    this.props.updateLocation(pathname);
    this.getAllProducts();
  }

  getAllProducts = async () => {
    const response = await fetch(`${API_URL}/our-products`, {
      method: "GET"
    });

    if (response.ok) {
      const data = await response.json();
      this.setState({
        allProducts: data
      });
    }
  };

  render() {
    const { allProducts } = this.state;
    return (
      <Container text>
        Our products
        {allProducts &&
          allProducts.map((product, i) => {
            return (
              <tr key={product._id}>
                <td>{i + 1}.</td>
                <td>{product.code}</td>
                <td>{product.description}</td>
                <td>{product.minQty}</td>
                <td>{product.UOM}</td>
              </tr>
            );
          })}
      </Container>
    );
  }
}
