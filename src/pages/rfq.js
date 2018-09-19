import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Form,
  Grid,
  Header,
  Image,
  Icon,
  Input
} from "semantic-ui-react";

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
  render() {
    const rfqItems = this.props.rfqItems.map((item, index) => (
      <li key={index}>
        {item.productId}: {item.qty}
      </li>
    ));

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
              <Grid.Column>
                <Image src="https://cdn4.iconfinder.com/data/icons/sales-reports/512/price_info-512.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://cdn4.iconfinder.com/data/icons/sales-reports/512/price_info-512.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://cdn4.iconfinder.com/data/icons/sales-reports/512/price_info-512.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://cdn4.iconfinder.com/data/icons/sales-reports/512/price_info-512.png" />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={5}>
              <Grid.Column>
                <Image src="https://cdn4.iconfinder.com/data/icons/sales-reports/512/price_info-512.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://cdn4.iconfinder.com/data/icons/sales-reports/512/price_info-512.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://cdn4.iconfinder.com/data/icons/sales-reports/512/price_info-512.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://cdn4.iconfinder.com/data/icons/sales-reports/512/price_info-512.png" />
              </Grid.Column>
              <Grid.Column>
                <Image src="https://cdn4.iconfinder.com/data/icons/sales-reports/512/price_info-512.png" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </Container>

      // <ul>{rfqItems}</ul>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    rfqItems: reduxState.rfqItems
  };
};

export default connect(mapStateToProps)(Rfq);
