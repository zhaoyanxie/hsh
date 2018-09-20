import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Form, Grid, Header, Image, Icon } from "semantic-ui-react";
import QtyCounter from "../components/Body/QtyCounter";
import { ADD_RFQ_ITEM, REDUCE_RFQ_ITEM, REMOVE_RFQ_ITEM } from "../store/types";

const today = new Date();
const todayDate = today.getDate();
const todayMonth = today.getMonth();
const todayYear = today.getFullYear();
const months = [
  null,
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

class Rfq extends Component {
  handleUpDown = (event, item, upOrDown) => {
    console.log(item, upOrDown);
    this.props.dispatch({
      type: upOrDown,
      productId: item.productId,
      description: item.description,
      code: item.code,
      minQty: item.minQty,
      uom: item.uom
    });
  };

  render() {
    const { rfqItems } = this.props;
    return (
      <Container text>
        <Header as="h1" block>
          <Image
            size="big"
            src="https://image.flaticon.com/icons/svg/138/138360.svg"
          />
          Request for Quotation (RFQ)
        </Header>
        <hr />
        <Form>
          <Grid celled>
            <Grid.Row columns={2}>
              <Grid.Column width={10}>
                <Header as="h3" content="Requester Information" />
                <hr />
                <Form.Field>
                  <label>
                    <Icon name="building" />
                    Company Name
                  </label>
                  <Form.Input placeholder="Company name" />
                  <label>
                    <Icon name="address book" />
                    Company Address
                  </label>
                  <Form.Input placeholder="Company Address" />
                  <label>
                    <Icon name="user" />
                    Contact Name
                  </label>
                  <Form.Input placeholder="Contact Name" />
                  <label>
                    <Icon name="phone" />
                    Telephone Number
                  </label>
                  <Form.Input placeholder="Telephone Number" />
                  <label>
                    <Icon name="mail" />
                    Email Address
                  </label>
                  <Form.Input placeholder="Email Address" />
                </Form.Field>
              </Grid.Column>

              <Grid.Column width={6}>
                <Header as="h3" content="RFQ Information" />
                <hr />
                <Form.Field>
                  <label style={{ display: "inline", marginRight: "10px" }}>
                    Date of RFQ:
                  </label>
                  <span>
                    {todayDate} - {months[todayMonth]} - {todayYear}
                  </span>
                  <br />
                  <br />
                  <br />

                  <label>RFQ Due Date:</label>
                </Form.Field>
                <Form.Input placeholder="RFQ Due Date" />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={4}>
              <Grid.Column>Product Code</Grid.Column>
              <Grid.Column>Product Description</Grid.Column>
              <Grid.Column>Unit of Measure</Grid.Column>
              <Grid.Column>RFQ Qty</Grid.Column>
            </Grid.Row>
            {rfqItems &&
              rfqItems.map(item => {
                return (
                  <Grid.Row
                    columns={Object.keys(item).length - 2}
                    key={item.productId}
                  >
                    <Grid.Column>{item.code}</Grid.Column>
                    <Grid.Column>{item.description}</Grid.Column>
                    <Grid.Column>{item.uom}</Grid.Column>
                    <Grid.Column style={{ padding: "0" }}>
                      <QtyCounter
                        item={item}
                        handleUpDown={this.handleUpDown}
                      />
                    </Grid.Column>
                  </Grid.Row>
                );
              })}
          </Grid>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    rfqItems: reduxState.rfqItems
  };
};

export default connect(mapStateToProps)(Rfq);
