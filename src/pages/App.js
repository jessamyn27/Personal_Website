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

import IconWrapper from '../components/IconWrapper';
import PostContainer from '../components/PostContainer';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
import ProjectPic from '../components/Projects';

const App = () => (<div>
  {/* <Center> */}
  <CoverImage/>
  <Body>
    <Center>

      <a href="/"><Avatar/></a>
      <A href="/">Jessamyn McTwigan</A>

      <Title>Full-Stack Developer</Title>
      <Title>Austin, TX</Title>
      <p>
        <B>Hi! I am a creative, solutions-driven software developer with a passion for design, intuitive functionality, and accessibility. {/* My professional experience has made me able to quickly adapt for efficient solutions to multi-faceted problems. */}
        </B>
      </p>
      <br></br>
      <p>
        <B>
          I moved to Austin after working in the music industry for 7 years and realized I wanted to do something new and different. It doesn't take long in Austin to notice the prevalent tech startup world here. My curiosity led me to the realization that coding is the most important job skill of the future. Coding is also the balance of both my creativity and my problem solving abilities. In my research and reaching out to some of the best tech resources in Austin, I found that GA was the best fit for me. I enjoyed being immersed in learning every day. I also can't wait to take the skills I learned and the exposure I gained in this amazing community to further grow. It really is an exciting time to be a web developer! {/* I think everyone in the world has the power to share knowledges and continue to learn. */}
        </B>
      </p>
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

        {/* <Link to='/projects'><Lightbulb size={50}/>
          <Route path='/projects' component={Projects}/>
        </Link> */}


        <Link to='/resume'><Paper size={50}/>
          <Route path='/resume' component={Resume}/>
        </Link>

      </IconWrapper>
      <br></br>
      <A>My Projects</A>
      <br></br>
      <Projects/>
      <br></br>
      <A href="/"><Up size={50}/></A>
      <br></br>
      <br></br>
      <br></br>

    </Center>
  </Body>
</div>);

export default App;
