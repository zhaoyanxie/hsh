import React, { Component } from "react";
import {
  Container,
  Grid,
  Header,
  Image,
  Icon,
  Message
} from "semantic-ui-react";
import { API_URL } from "../../utils/configVar";

class RfqForm extends Component {
  constructor() {
    super();
    this.state = {
      rfq: []
    };
  }

  getRfq = async rfqNo => {
    const response = await fetch(`${API_URL}rfq/all/${rfqNo}`, {
      method: "GET"
    });

    if (response.ok) {
      const data = await response.json();
      this.setState({
        rfq: data
      });
    }
  };

  componentDidMount() {
    const regExpRfqNo = /\d+/;
    this.getRfq(this.props.pathname.match(regExpRfqNo));
  }

  render() {
    const rfq = this.state.rfq[0];
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
        <Grid celled>
          <Grid.Row columns={2}>
            <Grid.Column width={10}>
              <Header as="h3" content="Requester Information" />
              <hr />
              <label>
                <Icon name="building" />
                Company Name
              </label>
              <Message size="tiny">{rfq && rfq.companyName}</Message>
              <label>
                <Icon name="address book" />
                Company Address
              </label>
              <Message size="tiny">{rfq && rfq.companyAddress}</Message>
              <label>
                <Icon name="user" />
                Contact Name
              </label>
              <Message size="tiny">{rfq && rfq.contactName}</Message>
              <label>
                <Icon name="phone" />
                Contact Number
              </label>
              <Message size="tiny">{rfq && rfq.contactNumber}</Message>
            </Grid.Column>

            <Grid.Column width={6}>
              <Header as="h3" content="RFQ Information" />
              <hr />
              <label style={{ display: "inline", marginRight: "10px" }}>
                Date of RFQ:
              </label>
              <span>{rfq && rfq.rfqDate}</span>
              <br />
              <br />
              <br />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={4}>
            <Grid.Column>Product Code</Grid.Column>
            <Grid.Column>Product Description</Grid.Column>
            <Grid.Column>Unit of Measure</Grid.Column>
            <Grid.Column>RFQ Qty</Grid.Column>
          </Grid.Row>

          {rfq &&
            rfq.rfqItems.map(item => {
              return (
                <Grid.Row
                  columns={Object.keys(item).length - 2}
                  key={item.productId}
                >
                  <Grid.Column>{item.code}</Grid.Column>
                  <Grid.Column>{item.description}</Grid.Column>
                  <Grid.Column>{item.uom}</Grid.Column>
                  <Grid.Column>{item.qty}</Grid.Column>
                </Grid.Row>
              );
            })}
        </Grid>
      </Container>
    );
  }
}

export default RfqForm;
