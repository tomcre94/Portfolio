import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCards from './ProjectCards';
import Particle from '../Particle';
const importAll = (r) => r.keys().map(r);
const bookiImages = importAll(
  require.context('../../Assets/Projects/Booki', false, /\.(png|jpe?g|svg)$/)
);
const grimoireImages = importAll(
  require.context('../../Assets/Projects/Grimoire', false, /\.(png|jpe?g|svg)$/)
);
const kasaImages = importAll(
  require.context('../../Assets/Projects/Kasa', false, /\.(png|jpe?g|svg)$/)
);
const ninaImages = importAll(
  require.context('../../Assets/Projects/Nina', false, /\.(png|jpe?g|svg)$/)
);

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 id='projects' className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCards
              imgPath={bookiImages[0]}
              isBlog={false}
              title='Booki'
              description='Project to create the frontend of an online accommodation booking site : Booki.'
              detailedDescription='Project as part of my web developer training at Openclassroom. 
              
              The assignment was to help BOOKI develop a website that would enable users to find accommodation and activities in the city of their choice. 
              
              The interest for me has been to discover, understand and get to grips with the basic website creation HTML and CSS. 
              
              Project to create the of an online accommodation booking site : Booki.'
              ghLink='https://github.com/tomcre94/Projet-n2.git'
              carouselImages={bookiImages}
              demoLink='https://projetn-2ynsv7ez6-tomcre94s-projects.vercel.app/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCards
              imgPath={kasaImages[1]}
              isBlog={false}
              title='Kasa'
              description='Development of a website for an apartment rental company.'
              detailedDescription='Development of a website for an apartment rental company. My role was to create the front-end of the site using React from a given mockup so that it would display the accommodations dynamically using an API. I also had to create the animations for the Collapses components. Site development with React: React components, React Router routes, props, state, use of Sass ...'
              ghLink='https://github.com/tomcre94/Projet-6.git'
              carouselImages={kasaImages}
              demoLink='https://projet-6-dvzhi9zgd-tomcre94s-projects.vercel.app/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCards
              imgPath={ninaImages[0]}
              isBlog={false}
              title='Nina Carducci website'
              description='Improvement performance, SEO, accessibility and correct a few typos in the code of a photographers portfolio website.'
              detailedDescription='My role was to improve overall performance, SEO, accessibility and correct a few typos in the code of a photographers portfolio website.
              I had to :
              - optimize the overall performance and SEO of the site;
              - implement local SEO using Schema.org ;
              - add metas for social networks;
              - make modifications related to site accessibility;
              - produce an optimization report presenting all your actions and their impact. 
              Chrome DevTools ; Lighthouse ; Intervention report'
              ghLink='https://github.com/tomcre94/Projet-5.git'
              carouselImages={ninaImages}
              demoLink='https://projet-5-3fnxz02lp-tomcre94s-projects.vercel.app/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCards
              imgPath={grimoireImages[0]}
              isBlog={false}
              title='Mon vieux grimoire backend'
              description='Create a server with Express and managing communication with the database (MongoDB).
              I had to develop the data models and implement CRUD operations for managing books and notations.'
              detailedDescription='My role was to create a server with Express and connect it to a MongoDB database. This involved setting up the server structure and managing communication between the server and the database.
              I had to develop the data models and implement CRUD (Create, Read, Update, Delete) operations for managing books and notations. I had to pay particular attention to data security and secure storage.
               
              I also implemented a secure authentication system for site users, managed the downloading and optimization of images (Green Code), and added features for rating books and calculating the average score.
              I used Mongoose to model the MongoDB data, and followed an MVC (Model-View-Controller) architecture to structure the application.
              
              Javascript, NodeJS, Express, postMan ...'
              ghLink='https://github.com/tomcre94/Projet-7.git'
              carouselImages={grimoireImages}
              demoLink='https://projet-7-n0hqtgi0v-tomcre94s-projects.vercel.app/'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
