import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';
import pdf from '../../Assets/../Assets/CV_2024-04-22_Tom_Creuse.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className='purple'> Tom Creuse </span>
            from <span className='purple'> Vincennes, France.</span>
            <br />
            I am currently employed in the digital department of the french
            Ministry of the Economy and Finance.
            <br />
            I have a Master's degree in law and a diploma in web development at
            OpenClassrooms.
            <br />
            <br />
            Apart from coding, I'm interested in :
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Culture : classical music, museums, cinema, ...
            </li>
            <li className='about-activity'>
              <ImPointRight /> Sports : running, boxing, judo, ...
            </li>
            <li className='about-activity'>
              <ImPointRight /> Playing the piano
            </li>
          </ul>
          <Row style={{ justifyContent: 'center', position: 'relative' }}>
            <Button
              variant='primary'
              href={pdf}
              target='_blank'
              style={{ maxWidth: '250px' }}
            >
              <AiOutlineDownload />
              &nbsp;Download my resume
            </Button>
          </Row>
          <br />
          <p style={{ color: 'rgb(155 126 172)' }}>
            "The change you want to see in the world starts with yourself."{' '}
          </p>
          <footer className='blockquote-footer'>Mahatma Gandhi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
