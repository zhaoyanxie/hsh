import React, { Component } from "react";
import { Button, Container, Header, Image, Table } from "semantic-ui-react";
import { API_URL } from "../utils/configVar";
import { connect } from "react-redux";
import { ADD_RFQ_ITEM } from "../store/types";

class OurProducts extends Component {
  constructor() {
    super();
    this.state = {
      allProducts: []
    };
  }

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
    this.props.dispatch({
      type: ADD_RFQ_ITEM,
      productId: productId
    });
  };

  handleSubmitToRfq = event => {};

  findRfqItemQty = product_id => {
    const { rfqItems } = this.props;
    const itemArray = rfqItems.filter(item => item.productId === product_id);
    return itemArray.length > 0 ? itemArray[0].qty : 0;
  };

  render() {
    const { allProducts } = this.state;

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
                          content: this.findRfqItemQty(product._id)
                        }}
                        labelPosition="right"
                        size="mini"
                        onClick={e => this.handleClick(e, product._id)}
                      />
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            <Table.Row>
              {Array.from({ length: 4 }).map((element, i) => (
                <Table.Cell key={i} />
              ))}

              <Table.Cell>
                <Button color="red" onClick={e => this.handleSubmitToRfq(e)}>
                  To RFQ Page
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    rfqItems: reduxState.rfqItems
  };
};

export default connect(mapStateToProps)(OurProducts);
