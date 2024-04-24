import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlus } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Card className='project-card-view'>
        <Card.Img
          variant='top'
          onClick={handleCardClick}
          src={props.imgPath}
          alt='card-img'
        />
        <Card.Body>
          <Card.Title onClick={handleCardClick}>{props.title}</Card.Title>
          <Card.Text onClick={handleCardClick} style={{ textAlign: 'justify' }}>
            {props.description}
          </Card.Text>
          <Button variant='primary' onClick={handleCardClick}>
            <FaPlus />
            &nbsp; Read more
          </Button>
          <br />
          <br />
          <Button variant='primary' href={props.ghLink} target='_blank'>
            <BsGithub /> &nbsp;
            {props.isBlog ? 'Blog' : 'GitHub'}
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel
            showThumbs={false}
            selectedItem={index}
            onChange={handleSelect}
          >
            {props.carouselImages.map((image, idx) => (
              <div key={idx}>
                <img src={image} alt={`slide-${idx}`} />
              </div>
            ))}
          </Carousel>

          <p>{props.detailedDescription}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCards;
