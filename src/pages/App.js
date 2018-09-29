import React from 'react';
import Envelope from 'react-icons/lib/fa/envelope-square';
import GitHub from 'react-icons/lib/fa/github';
import Twitter from 'react-icons/lib/fa/twitter-square';
import File from 'react-icons/lib/fa/file-text';
import Paper from 'react-icons/lib/io/ios-paper-outline';
import Up from 'react-icons/lib/fa/chevron-up';
import Hand from 'react-icons/lib/fa/hand-paper-o';

import {Link} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';

import Linkedin from 'react-icons/lib/fa/linkedin-square';
import CoverImage from '../components/CoverImage';
import Body from '../components/Body';
import Avatar from '../components/Avatar';
import Center from '../components/Center';
import A from '../components/A';
import B from '../components/B';
import a from '../components/aa';
import Scroll from '../components/Scroll';

import Small from '../components/Small';

import Title from '../components/Title';
import BigTitle from '../components/BigTitle';

import IconWrapper from '../components/IconWrapper';
import ResumePic from '../components/Resume';
import Projects from '../components/Projects';
import ProjectPic from '../components/Projects';
import Parent from '../components/Toggle';

const App = () => (
  <div>
  <CoverImage/>
  <Body>
    <Center>

      <a href="/"><Avatar/></a>
      <BigTitle>Jessamyn McTwigan</BigTitle>
      <Title>FULL STACK DEVELOPER | AUSTIN TX</Title>

      <IconWrapper>

        <a href="mailto:jessamyn.mctwigan@gmail.com" target="jessamyn.mctwigan@gmail.com" rel="jessamyn.mctwigan@gmail.com">
          <Envelope size={50}/>
        </a>
        <a href="https://github.com/jessamyn27" target="_blank" rel="noreferrer noopener">
          <GitHub size={50}/>
        </a>
        <a href="https://www.linkedin.com/in/jessamynmctwigan" target="_blank" rel="noreferrer noopener">
          <Linkedin size={50}/>
        </a>
        <a href="https://drive.google.com/file/d/1zbOLxelvEr1tOrey0VTvERaJQ4kwAhAq/view?usp=sharing" target="_blank" rel="noreferrer noopener">
          <File size={43}/>
        </a>
        {/* <Link to='/resume'><File size={43}/>
          <Route path='/resume' component={ResumePic}/>
        </Link> */}

      </IconWrapper>

    </Center>
<br></br>
      <div>
        <B>I'm a creative, solutions-driven developer with a passion for design, functionality, and accessibility. I strive for balance at the intersection of design, technology and business. I've learned to approach problems with empathy alongside efficiency.
          <br></br>
          <br></br>

          {/* Adventure / Art / Business / Music Venue / coding is all of that and awesome way of the future blah blah...
          I enjoy solving problems and I'm curious about new ways to solve them. */}


          When I moved to Austin, it didn't take long to notice the growing and diverse tech community here and I'm excited to be a part of it.
        <br></br>
        <br></br>
I'm currently scouting my next project and can meet anywhere in the Austin City area. If you need some work done or just wanna chat,
          <br></br> <br></br><IconWrapper><A href="mailto:jessamyn.mctwigan@gmail.com" target="jessamyn.mctwigan@gmail.com" rel="jessamyn.mctwigan@gmail.com">
            <Hand size={50}/>
          </A></IconWrapper> high five me and let's get coffee!
        <br></br>

        <br></br>
        <br></br>
          </B>
      </div>
      <Projects/>
      <br></br>
      <br></br>


      <br></br>
      <br></br>

      <Center>
      <A href="/"><Up size={50}/></A>
      </Center>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
  </Body>
</div>);

export default App;
