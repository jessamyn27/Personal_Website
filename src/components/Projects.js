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

        <div>
          <A href='https://flashcard-fun-app.firebaseapp.com' target="_blank" rel="noreferrer noopener">Coding Study App</A>
          <B>FIREBASE | REACT | NODE.JS</B>
            <IconWrapper>
              <a href="https://github.com/jessamyn27/flashcard-fun-app" target="_blank" rel="noreferrer noopener">
                <GitHub size={50}/>
              </a>
            </IconWrapper>
            <br></br>
            <C>
            Coding Study App is a study guide start for coding with an animated flashcard set, full CRUD to-do list and linked resource page. To continue this App, I would use Firebase for OAuth login so people could create accounts. I would design full CRUD for the Flashcard page.
          </C>
        </div>
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

            <div>
              <A href='https://github.com/jessamyn27/Party-Potensh-Playlist-App/blob/master/README.md' target="_blank" rel="noreferrer noopener">Party Playlist App</A>
              <B>REACT | EXPRESS | NODE.JS | SPOTIFY API | GOOGLE API | MONGODB</B>
                <IconWrapper>
                  <a href="https://github.com/jessamyn27/Party-Potensh-Playlist-App/blob/master/README.md" target="_blank" rel="noreferrer noopener">
                    <GitHub size={50}/>
                  </a>
                </IconWrapper>
                <br></br>
                  <C>
                    This full stack app uses React with MongoDB as the back end for Auth. It also consumes the Spotify API, Google Map API, and Weather API for a full CRUD and RESTful app. The user can create a party event and also let guests search and add to the Spotify playlist. The user can also see the map and weather for that location.
              </C>
            </div>



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

        <div>
          <A href='https://outdoor-austin.herokuapp.com/' target="_blank" rel="noreferrer noopener">Outdoor Austin App</A>
          <B>DJANGO | POSTGRESQL | REACT | PYTHON</B>
            <IconWrapper>
              <a href="https://github.com/jessamyn27/outdoor-austin" target="_blank" rel="noreferrer noopener">
                <GitHub size={50}/>
              </a>
            </IconWrapper>
            <br></br>
<C>
            This is a full stack app with the start of a full CRUD Database. To continue working on this app, I would add in a mapping API like the open source Mapbox, a profile feature, and perhaps using OAuth.
          </C>
        </div>

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

        <div>
          <A href='https://cat-v-baby.herokuapp.com/home' target="_blank" rel="noreferrer noopener">Cat vs Baby App</A>
          <B>EXPRESS | MONGODB | MONGOOSE</B>
            <IconWrapper>
              <a href="https://github.com/jessamyn27/cat-v-baby" target="_blank" rel="noreferrer noopener">
                <GitHub size={50}/>
              </a>
            </IconWrapper>
          <C>
            It's a full Stack App with CRUD, using MVC to create an adorable game. The guest can log in, create a profile page, add photos to the game or just play! A continuation of this app would be using flexbox for photo formatting.
          </C>
        </div>

      </div>
    </Center>

    </div>)
  }
}

Projects.displayName = 'Projects';

export default Projects;
