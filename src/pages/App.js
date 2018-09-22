import React from 'react';
import Envelope from 'react-icons/lib/fa/envelope-square';
import GitHub from 'react-icons/lib/fa/github';
import Twitter from 'react-icons/lib/fa/twitter-square';
import Lightbulb from 'react-icons/lib/fa/lightbulb-o';
import Paper from 'react-icons/lib/io/ios-paper-outline';
import Up from 'react-icons/lib/fa/chevron-up';

import {Link} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';

import Linkedin from 'react-icons/lib/fa/linkedin-square';
import CoverImage from '../components/CoverImage';
import Body from '../components/Body';
import Avatar from '../components/Avatar';
import Center from '../components/Center';
import A from '../components/A';
import B from '../components/B';
import Title from '../components/Title';
import BigTitle from '../components/BigTitle';

import IconWrapper from '../components/IconWrapper';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
import ProjectPic from '../components/Projects';

const App = () => (<div>
  {/* <Center> */}
  <CoverImage/>
  <Body>
    <Center>

      <a href="/"><Avatar/></a>
      <BigTitle>Jessamyn McTwigan</BigTitle>

      <Title>Full-Stack Web Developer</Title>
      <Title>Austin, TX</Title>
      <IconWrapper>

        <a href="mailto:jessamyn.mctwigan@gmail.com" target="jessamyn.mctwigan@gmail.com" rel="jessamyn.mctwigan@gmail.com">
          <Envelope size={50}/>
        </a>
        <a href="https://github.com/jessamyn27" target="_blank" rel="noreferrer noopener">
          <GitHub size={50}/>
        </a>
        <a href="https://www.linkedin.com/in/jessamyn27" target="_blank" rel="noreferrer noopener">
          <Linkedin size={50}/>
        </a>
        <Link to='/resume'><Paper size={50}/>
          <Route path='/resume' component={Resume}/>
        </Link>

      </IconWrapper>
    </Center>
<br></br>
      <div>
        <B>I'm a creative, solutions-driven developer with a passion for design, functionality, and accessibility.
          I enjoy solving problems and I'm curious about new ways to solve them.

        <br></br>
        <br></br>
          When I moved to Austin, it didn't take long in to see the growing and diverse tech community here. On the global scope, coding may be the most relevant job skill of the future, it's an exciting time to be a web developer.
        <br></br>
        <br></br>
        Check out my projects below or click an icon to learn more about me.
        <br></br>
        <br></br>
        Contact me and let's get coffee!
          <br></br>
          </B>
      </div>
      <Projects/>
      <br></br>
      <br></br>

      <IconWrapper>

        <a href="mailto:jessamyn.mctwigan@gmail.com" target="jessamyn.mctwigan@gmail.com" rel="jessamyn.mctwigan@gmail.com">
          <Envelope size={50}/>
        </a>
        <a href="https://github.com/jessamyn27" target="_blank" rel="noreferrer noopener">
          <GitHub size={50}/>
        </a>
        <a href="https://www.linkedin.com/in/jessamyn27" target="_blank" rel="noreferrer noopener">
          <Linkedin size={50}/>
        </a>
        <Link to='/resume'><Paper size={50}/>
          <Route path='/resume' component={Resume}/>
        </Link>

      </IconWrapper>
      <br></br>
      <br></br>

      <Center>
      <A href="/"><Up size={50}/></A>
      </Center>
      <br></br>
      <br></br>
      <br></br>

  </Body>
</div>);

export default App;
