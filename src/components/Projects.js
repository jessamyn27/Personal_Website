import React, { Component } from 'react';
import styled from 'styled-components';
import outdoor from '../statics/images/outdoor.png';
import catvbaby from '../statics/images/catvbaby.png';

import A from './A';
import B from './B';
import C from './C';

const ProjectPic1 = styled.div`
  background-image: url(${outdoor});
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  height: 650px;
  width: 500px;
  position: relative;
  top: 30px;
  margin-bottom: -20px;
  border: none;
  border-radius: 5%;
  ${'' /* <a href='https://outdoor-austin.herokuapp.com/'></a> */}
`
const ProjectPic2 = styled.div`
  background-image: url(${catvbaby});
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  height: 650px;
  width: 500px;
  position: relative;
  top: 30px;
  margin-bottom: -20px;
  border: none;
  border-radius: 5%;
  ${'' /* <a href='https://outdoor-austin.herokuapp.com/'></a> */}
`

class Projects extends Component {
  render() {
    return(
<div>
      <div>
        <br></br>
        <A href='https://outdoor-austin.herokuapp.com/'>Outdoor Austin App</A>
        <ProjectPic1/>
        <br></br>
        <br></br>

        <p>
        <C>This was a fun project using Django as the backend with PostgreSQL as the database and React as the front end! I wanted to make something light and fun that would have CRUD, be RESTful and honestly be something I would use! If I were to continue working on this app, I would add in a mapping API like the open source Mapbox, add in a login and profile feature, perhaps using OAuth, and do a one-to-many schema (right now it's just a one) for the model aspect of MVC. It would be fun to add an API for weather based on the address and maybe a resource page for fun stuff to do in Austin like Do512 and the famous Odam's top 50 restaurants of the Statesmen (ohhh or if they have an API i would just create a page to display).
      </C>
      </p>
      <A href='https://outdoor-austin.herokuapp.com/'>Github Source Code</A>

      </div>
      <div>
        <br></br>
        <A href='https://cat-v-baby.herokuapp.com/home'>Cat vs Baby!</A>
        <ProjectPic2/>
        <br></br>
        <br></br>

        <p>
        <C>It was fun to make a Full Stack App that displayed a G rated version of the "Hot or Not" game, while displaying full CRUD using Express, Node.js, MongoDB, Mongoose and EJS. I learned how to using MVC to create a silly and adorable game that the client can register, log in, add photos to the game, or just play and not need to log in!
      </C>
      </p>
      <A href='https://github.com/jessamyn27/cat-v-baby'>Github Source Code</A>

      </div>

</div>
    )
  }
}


Projects.displayName = 'Projects';

export default Projects;
