import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './WhyPage.css'

function WhyPage() {
    return (
        <Container className='WhyPage'>
          <Row className='heading-WhyPage'>
              Why AlgoProdigy?
          </Row>
          <Row xs={1} sm={1} md={2} lg={3}>
              <Col className='box'>
                <p>Box</p>
              </Col>
              <Col className='box-2'>
                box-2
              </Col>
              <Col className='box-3'>
                box-3
              </Col>
          </Row>
        </Container>
    )
}

export default WhyPage
