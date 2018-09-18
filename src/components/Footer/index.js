import React from "react";
import { Link } from "react-router-dom";
import { Segment, Container, Grid, List, Header } from "semantic-ui-react";
import { OUR_PRODUCTS, OUR_STORES, RFQ } from "../../pages/endpoints";

const footerLinks = [
  {
    colWidth: 4,
    header: "About Us",
    links: [
      { id: "link-1", link: OUR_PRODUCTS, text: "Our Products" },
      {
        id: "link-2",
        link: OUR_STORES,
        text: "Our Retail Stores"
      }
    ]
  },
  {
    colWidth: 5,
    header: "Services",
    links: [{ id: "link-3", link: RFQ, text: "Ask for Quotation" }]
  }
];

const Footer = () => {
  return (
    <Segment
      vertical
      style={{
        padding: "4em 0em",
        marginTop: "3em",
        borderTop: "1px solid #f2f2f2"
      }}
    >
      <Container text>
        <Grid stackable>
          <Grid.Row width={4}>
            {footerLinks.map((footerLink, ind) => {
              return (
                <Grid.Column key={ind} width={footerLink.colWidth}>
                  <Header as="h4" content={footerLink.header} />
                  {footerLink.links.map(link => (
                    <List key={link.id}>
                      <List.Item as={Link} to={link.link}>
                        {link.text}
                      </List.Item>
                    </List>
                  ))}
                </Grid.Column>
              );
            })}

            <Grid.Column width={7}>
              <Header as="h4">Footer Header</Header>
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
              <List horizontal>
                <List.Item
                  icon="twitter"
                  content={
                    <a href="https://twitter.com/" alt="twitter link">
                      Twitter
                    </a>
                  }
                />
                <List.Item
                  icon="facebook"
                  content={
                    <a
                      href="https://www.facebook.com/KitchenplusWare/"
                      alt="facebook link"
                    >
                      Facebook
                    </a>
                  }
                />
                <List.Item
                  icon="mail"
                  content={
                    <a href="#" alt="email link">
                      Email
                    </a>
                  }
                />
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
