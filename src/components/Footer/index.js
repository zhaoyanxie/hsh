import React from "react";
import { Link } from "react-router-dom";
import { Segment, Container, Grid, List, Header } from "semantic-ui-react";

const footerLinks = [
  {
    colWidth: 4,
    header: "About Us",
    links: [
      { link: "/our_products", text: "Our Products" },
      { link: "/our_retail_stores", text: "Our Retail Stores" }
    ]
  },
  {
    colWidth: 5,
    header: "Services",
    links: [{ link: "/services", text: "Our Services" }]
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
            {footerLinks.map(footerLink => {
              return (
                <Grid.Column width={footerLink.colWidth}>
                  <Header as="h4" content={footerLink.header} />
                  {footerLink.links.map(link => (
                    <List>
                      <List.Item as="a">
                        <Link to={link.link}>{link.text}</Link>
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
