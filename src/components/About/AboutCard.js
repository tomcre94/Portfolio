import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className='purple'> Tom Creuse </span>
            from <span className='purple'> Vincennes, France.</span>
            <br />
            I am currently working at employed in the digital department of the
            french Ministry of the Economy and Finance.
            <br />
            I have a Master's degree in law and a diploma in web development at
            OpenClassrooms.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Playing Games
            </li>
            <li className='about-activity'>
              <ImPointRight /> Playing the piano
            </li>
            <li className='about-activity'>
              <ImPointRight /> Sports : running, boxing, judo, ...
            </li>
          </ul>

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
