import React, {Component} from 'react';
import styled from 'styled-components';

import outdoor from '../statics/images/outdoor.png';
import catvbaby from '../statics/images/catvbaby.png';
import coding from '../statics/images/coding.png';
import party3 from '../statics/images/party3.png';


import Title from '../components/Title';
import Center from '../components/Center';
import GitHub from 'react-icons/lib/fa/github';
import IconWrapper from '../components/IconWrapper';

import BigTitle from './BigTitle';
import A from './A';
import B from './B';
import C from './C';

const ProjectPic1 = styled.div `
  background-image: url(${outdoor});
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  height: 250px;
  width: 220px;
  position: relative;
  top: 30px;
  margin-bottom: -20px;
  border: none;
  border-radius: 5%;
  background-position: center;

`
const ProjectPic2 = styled.div `
  background-image: url(${catvbaby});
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  height: 250px;
  width: 220px;
  position: relative;
  top: 30px;
  margin-bottom: -20px;
  border: none;
  border-radius: 5%;
  background-position: center;

  ${ ''/* <a href='https://outdoor-austin.herokuapp.com/'></a> */}
`
const ProjectPic3 = styled.div `
  background-image: url(${coding});
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  height: 250px;
  width: 220px;
  position: relative;
  top: 30px;
  margin-bottom: -20px;
  border: none;
  border-radius: 5%;
  background-position: center;
`
const ProjectPic4 = styled.div `
  background-image: url(${party3});
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  height: 250px;
  width: 220px;
  position: relative;
  top: 30px;
  margin-bottom: -20px;
  border: none;
  border-radius: 5%;
  background-position: center;

`

class Projects extends Component {
  render() {
    return (<div>

      <Center>
        <BigTitle>My Projects</BigTitle>
      <div>
        <a href='https://flashcard-fun-app.firebaseapp.com' target="_blank" rel="noreferrer noopener"><ProjectPic3/></a>
        <br></br>
        <br></br>
        <br></br>

        <p>
          <A href='https://flashcard-fun-app.firebaseapp.com' target="_blank" rel="noreferrer noopener">Coding Study App</A>
          <C>FIREBASE | REACT | NODE.JS
            <IconWrapper>
              <a href="https://github.com/jessamyn27/flashcard-fun-app" target="_blank" rel="noreferrer noopener">
                <GitHub size={50}/>
              </a>
            </IconWrapper>
            <br></br>
            Coding Study App is a study guide start for coding with an animated flashcard set, full CRUD to-do list and linked resource page. To continue this App I would definately use Firebase for OAuth login so people could create accounts, full CRUD for the Flashcard page so someone could create their own sets of data to choose from, add, edit and delete.
          </C>
        </p>
      </div>


        <br></br>
        <br></br>
        <br></br>
        <br></br>


          <br></br>


            <a href='https://github.com/jessamyn27/Party-Potensh-Playlist-App/blob/master/README.md' target="_blank" rel="noreferrer noopener"><ProjectPic4/></a>
            <br></br>
            <br></br>
            <br></br>

            <p>
              <A href='https://github.com/jessamyn27/Party-Potensh-Playlist-App/blob/master/README.md' target="_blank" rel="noreferrer noopener">Party Potensh Playlist App</A>
              <C>REACT | EXPRESS | NODE.JS | SPOTIFY API | GOOGLE API | MONGODB
                <IconWrapper>
                  <a href="https://github.com/jessamyn27/Party-Potensh-Playlist-App/blob/master/README.md" target="_blank" rel="noreferrer noopener">
                    <GitHub size={50}/>
                  </a>
                </IconWrapper>
                <br></br>
                  This full stack app uses React with MongoDB as the backend for Auth as well as consuming the Spotify API, Google Map API, and Weather API for a full CRUD and RESTful App. The idea is that someone could not only create a party event but also let guests seach and add to the Spotify playlist in real time.  They can also see the map and weather for that location.
              </C>
            </p>



          <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>


        <a href ='https://outdoor-austin.herokuapp.com/' target="_blank" rel="noreferrer noopener"><ProjectPic1/></a>
        <br></br>
        <br></br>
        <br></br>

        <p>
          <A href='https://outdoor-austin.herokuapp.com/' target="_blank" rel="noreferrer noopener">Outdoor Austin App</A>
          <C>DJANGO | POSTGRESQL | REACT | PYTHON
            <IconWrapper>
              <a href="https://github.com/jessamyn27/outdoor-austin" target="_blank" rel="noreferrer noopener">
                <GitHub size={50}/>
              </a>
            </IconWrapper>
            <br></br>

            This is a full stack app with the start of a full CRUD Database of Outdoor Activities in Austin. If I were to continue working on this app, I would add in a mapping API like the open source Mapbox, a login and profile feature, perhaps using OAuth.
          </C>
        </p>

      </div>
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      

        <a href='https://cat-v-baby.herokuapp.com/home' target="_blank" rel="noreferrer noopener"><ProjectPic2/></a>

        <br></br>
        <br></br>
        <br></br>

        <p>
          <A href='https://cat-v-baby.herokuapp.com/home' target="_blank" rel="noreferrer noopener">Cat vs Baby App</A>
          <C>EXPRESS | MONGODB | MONGOOSE
            <IconWrapper>
              <a href="https://github.com/jessamyn27/cat-v-baby" target="_blank" rel="noreferrer noopener">
                <GitHub size={50}/>
              </a>
            </IconWrapper>
            It's a full Stack App with CRUD, and using MVC to create an adorable game. The guest can register, log in, add photos to the game and profile page or just play! A continuation of this App would include flexbox for styling structure and better photo managing.
          </C>
        </p>

      </div>
    </Center>

    </div>)
  }
}

Projects.displayName = 'Projects';

export default Projects;
