import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import leaf from '../../Assets/Projects/leaf.png';
import emotion from '../../Assets/Projects/emotion.png';
import editor from '../../Assets/Projects/codeEditor.png';
import chatify from '../../Assets/Projects/chatify.png';
import suicide from '../../Assets/Projects/suicide.png';
import bitsOfCode from '../../Assets/Projects/blog.png';

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
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title='Booki'
              description='Project as part of my web developer training at Openclassroom. The aim of this exercise was to discover, understand and get to grips with the basic website creation HTML and CSS. Project to create the of an online accommodation booking site : Booki.'
              ghLink='https://github.com/soumyajit4419/Chatify'
              demoLink='https://chatify-49.web.app/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title='Kasa'
              description='Development of a website for an apartment rental company. My role was to create the front-end of the site using React from a given mockup so that it would display the accommodations dynamically using an API. I also had to create the animations for the Collapses components. Site development with React: React components, React Router routes, props, state, use of Sass ...'
              ghLink='https://github.com/soumyajit4419/Bits-0f-C0de'
              demoLink='https://blogs.soumya-jit.tech/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title='Nina Carducci website'
              description='My role was to improve overall performance, SEO, accessibility and correct a few typos in the code of a photographers portfolio website.
              I had to :
              - optimize the overall performance and SEO of the site;
              - implement local SEO using Schema.org ;
              - add metas for social networks;
              - make modifications related to site accessibility;
              - produce an optimization report presenting all your actions and their impact. 
              Chrome DevTools ; Lighthouse ; Intervention report'
              ghLink='https://github.com/soumyajit4419/Editor.io'
              demoLink='https://editor.soumya-jit.tech/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title='Mon vieux grimoire website'
              description='My role was to create a server with Express and connect it to a MongoDB database. This involved setting up the server structure and managing communication between the server and the database.
              I had to develop the data models and implement CRUD (Create, Read, Update, Delete) operations for managing books and notations. I had to pay particular attention to data security and secure storage.
               
              I also implemented a secure authentication system for site users, managed the downloading and optimization of images (Green Code), and added features for rating books and calculating the average score.
              I used Mongoose to model the MongoDB data, and followed an MVC (Model-View-Controller) architecture to structure the application.
              
              Javascript, NodeJS, Express, postMan ... '
              ghLink='https://github.com/soumyajit4419/Plant_AI'
              demoLink='https://plant49-ai.herokuapp.com/'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
