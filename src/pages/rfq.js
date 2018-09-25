import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  Image,
  Icon,
  Rail
} from "semantic-ui-react";
import QtyCounter from "../components/Body/QtyCounter";
import ProductSearch from "../components/Body/ProductSearch";
import { ADD_RFQ_ITEM } from "../store/types";
import { API_URL } from "../utils/configVar";

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
  constructor() {
    super();
    this.state = {
      value: {
        companyName: "",
        companyAddress: "",
        contactName: "",
        contactNumber: "",
        email: "",
        dueDate: ""
      }
    };
  }

  handleChange = (event, field) => {
    this.setState({
      value: {
        ...this.state.value,
        [field]: event.target.value
      }
    });
  };

  handleSubmit = async () => {
    console.log("submitted");
    const {
      companyName,
      companyAddress,
      contactName,
      contactNumber,
      email,
      dueDate
    } = this.state.value;
    const { rfqItems } = this.props;

    return await fetch(`${API_URL}rfq/add`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        rfqNo: Date.now(),
        companyName,
        companyAddress,
        contactName,
        contactNumber,
        email,
        dueDate,
        rfqItems
      })
    });
  };

  handleIncreaseDecrease = (event, item, IncreaseOrDecrease) => {
    this.props.dispatch({
      type: IncreaseOrDecrease,
      productId: item.productId,
      description: item.description,
      code: item.code,
      minQty: item.minQty,
      uom: item.uom
    });
  };

  handleSearchProduct = result => {
    this.props.dispatch({
      type: ADD_RFQ_ITEM,
      productId: result._id,
      description: result.title,
      code: result.description,
      minQty: result.minQty,
      uom: result.uom
    });
  };

  render() {
    const { rfqItems } = this.props;
    const {
      companyName,
      companyAddress,
      contactName,
      contactNumber,
      email,
      dueDate
    } = this.state.value;

    return (
      <div>
        <Grid centered columns={2}>
          <Grid.Column>
            <Container text id="divToPrint">
              <Header as="h1" block>
                <Image
                  size="big"
                  src="https://image.flaticon.com/icons/svg/138/138360.svg"
                />
                Request for Quotation (RFQ)
              </Header>
              <hr />
              <Form onSubmit={this.handleSubmit}>
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
                        <Form.Input
                          placeholder="Company name"
                          value={companyName}
                          onChange={e => this.handleChange(e, "companyName")}
                        />
                        <label>
                          <Icon name="address book" />
                          Company Address
                        </label>
                        <Form.Input
                          placeholder="Company Address"
                          value={companyAddress}
                          onChange={e => this.handleChange(e, "companyAddress")}
                        />
                        <label>
                          <Icon name="user" />
                          Contact Name
                        </label>
                        <Form.Input
                          placeholder="Contact Name"
                          onChange={contactName}
                          onChange={e => this.handleChange(e, "contactName")}
                        />
                        <label>
                          <Icon name="phone" />
                          Contact Number
                        </label>
                        <Form.Input
                          placeholder="Contact Number"
                          onChange={contactNumber}
                          onChange={e => this.handleChange(e, "contactNumber")}
                        />
                        <label>
                          <Icon name="mail" />
                          Email Address
                        </label>
                        <Form.Input
                          placeholder="Email Address"
                          onChange={email}
                          onChange={e => this.handleChange(e, "email")}
                        />
                      </Form.Field>
                    </Grid.Column>

                    <Grid.Column width={6}>
                      <Header as="h3" content="RFQ Information" />
                      <hr />
                      <Form.Field>
                        <label
                          style={{ display: "inline", marginRight: "10px" }}
                        >
                          Date of RFQ:
                        </label>
                        <span>
                          {todayDate} - {months[todayMonth + 1]} - {todayYear}
                        </span>
                        <br />
                        <br />
                        <br />

                        <label>RFQ Due Date:</label>
                      </Form.Field>
                      <Form.Input
                        placeholder="RFQ Due Date"
                        onChange={dueDate}
                        onChange={e => this.handleChange(e, "dueDate")}
                      />
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
                              handleIncreaseDecrease={
                                this.handleIncreaseDecrease
                              }
                            />
                          </Grid.Column>
                        </Grid.Row>
                      );
                    })}
                </Grid>
                <Button
                  color="red"
                  type="submit"
                  content="Submit"
                  icon="right arrow"
                  labelPosition="right"
                />
              </Form>
            </Container>

            <Rail close size="big" position="left">
              <ProductSearch
                allProducts={this.props.allProducts}
                handleSelect={this.handleSearchProduct}
              />
            </Rail>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    rfqItems: reduxState.rfqItems,
    requester: reduxState.requester
  };
};

export default connect(mapStateToProps)(Rfq);
