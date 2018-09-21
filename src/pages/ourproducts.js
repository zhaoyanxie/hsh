import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Container, Header, Image, Table } from "semantic-ui-react";
import { ADD_RFQ_ITEM } from "../store/types";
import { RFQ } from "../pages/endpoints";

class OurProducts extends Component {
  componentDidMount() {
    const { pathname } = this.props.location;
    this.props.updateLocation(pathname);
  }

  handleClick = (event, product) => {
    this.props.dispatch({
      type: ADD_RFQ_ITEM,
      productId: product._id,
      description: product.description,
      code: product.code,
      minQty: product.minQty,
      uom: product.uom
    });
  };

  findRfqItemQty = product_id => {
    const { rfqItems } = this.props;
    const itemArray = rfqItems.filter(item => item.productId === product_id);
    return itemArray.length > 0 ? itemArray[0].qty : 0;
  };

  render() {
    const { allProducts } = this.props;
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
                console.log(allProducts);
                return (
                  <Table.Row key={product._id}>
                    <Table.Cell>
                      <Header as="h4" image>
                        <Image src={product.details.imgSrc[0]} rounded />
                        <Header.Content>
                          {product.details.description}
                          <Header.Subheader>
                            {product.details.code}
                          </Header.Subheader>
                        </Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>{product.category}</Table.Cell>
                    <Table.Cell>{product.details.minQty}</Table.Cell>
                    <Table.Cell>{product.details.uom}</Table.Cell>
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
                        onClick={e => this.handleClick(e, product)}
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
                <Button as={Link} to={RFQ} color="red">
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
