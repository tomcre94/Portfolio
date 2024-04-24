import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className='purple'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about-body'>
              As a passionate web developer, I am proficient in technologies
              such as{' '}
              <i>
                <b className='purple'>JavaScript, React and Node.js</b>
              </i>{' '}
              to create robust, innovative and high-performance web
              applications.
              <br />
              <br />
              Let me help you make your dreams come true.
              <br />
              <br />
              I'm a firm believer that{' '}
              <i>
                <b className='purple'>technology can change the world</b>
              </i>
              , and I'm excited to be a part of that change.
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
