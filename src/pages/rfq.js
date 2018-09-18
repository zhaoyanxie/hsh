import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";

class Rfq extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const rfqItems = this.props.rfq.map((rfqItem, index) => (
      <li key={index}>{rfqItem}</li>
    ));

    return (
      <Container text>
        from rfq
        <ul>{rfqItems}</ul>
      </Container>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    rfq: reduxState.rfq
  };
};

export default connect(mapStateToProps)(Rfq);
