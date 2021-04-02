import React from "react";
import "./HomePage.css";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@material-ui/core/index"
const HomePage = () => {
  return (
    <div className="homepage">
      <Container fluid="md">
        <Row xs={1} sm={1} md={1} lg={2}>
          <Col>
            <div className="b">
              <div className="heading">
                <h1>Learn The Expert Way</h1>
              </div>
              <div className="content">
                <p>
                  AlgoProdigy is the best platform to enhance your technical
                  skills required to ace coding interviews
                </p>
                <div className="rectangle">
                  <Button className="button">Create Account</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col >
            <div className="box-2">
              <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fb6%2FImage_created_with_a_mobile_phone.png%2F1200px-Image_created_with_a_mobile_phone.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&tbnid=gxFxsvFBmxeZ9M&vet=12ahUKEwjJxpHKwY_uAhWxB7cAHR82CsIQMygAegUIARDRAQ..i&docid=0JWe7yDOKrVFAM&w=1200&h=900&q=image&client=ubuntu&ved=2ahUKEwjJxpHKwY_uAhWxB7cAHR82CsIQMygAegUIARDRAQ" />
            </div>
          </Col>
        </Row>
      </Container>
      <div class="custom-shape-divider-bottom-1610033275">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HomePage;
