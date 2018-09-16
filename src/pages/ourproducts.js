import React, { Component } from "react";
import { Button, Container, Header, Image, Table } from "semantic-ui-react";
import { API_URL } from "../utils/configVar";

export default class OurProducts extends Component {
  constructor() {
    super();
    this.state = {
      allProducts: [],
      rfqQty: {}
    };
  }
  // Todo: change to HOC
  componentDidMount() {
    const { pathname } = this.props.location;
    this.props.updateLocation(pathname);
    this.getAllProducts();
  }

  getAllProducts = async () => {
    const response = await fetch(`${API_URL}our-products`, {
      method: "GET"
    });

    if (response.ok) {
      const data = await response.json();
      this.setState({
        allProducts: data
      });
    }
  };

  handleClick = (event, productId) => {
    const { rfqQty } = this.state;
    const rfqQtyKeys = Object.keys(rfqQty);
    const newRfq = {};

    if (rfqQtyKeys.length < 0 || rfqQtyKeys.indexOf(productId) === -1)
      newRfq[productId] = 1;
    else newRfq[productId] = rfqQty[productId] + 1;

    this.setState({
      rfqQty: { ...rfqQty, ...newRfq }
    });
  };

  render() {
    const { allProducts, rfqQty } = this.state;
    return (
      <Container text>
        <Table basic="very" celled collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Product</Table.HeaderCell>
              <Table.HeaderCell>Product Category</Table.HeaderCell>
              <Table.HeaderCell>Min. Order Qty</Table.HeaderCell>
              <Table.HeaderCell>Unit of Measure</Table.HeaderCell>
              <Table.HeaderCell>Add to RFQ!</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {allProducts &&
              allProducts.map((product, i) => {
                return (
                  <Table.Row key={product._id}>
                    <Table.Cell>
                      <Header as="h4" image>
                        <Image src={product.imgSrc[0]} rounded />
                        <Header.Content>
                          {product.description}
                          <Header.Subheader>{product.code}</Header.Subheader>
                        </Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>{product.category}</Table.Cell>
                    <Table.Cell>{product.minQty}</Table.Cell>
                    <Table.Cell>{product.uom}</Table.Cell>
                    <Table.Cell>
                      <Button
                        color="red"
                        content="RFQ!"
                        icon="heart"
                        label={{
                          as: "a",
                          basic: true,
                          content: rfqQty[product._id]
                        }}
                        labelPosition="right"
                        size="mini"
                        onClick={e => this.handleClick(e, product._id)}
                      />
                    </Table.Cell>
                  </Table.Row>
                );
              })}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}
