import React from 'react';
import Envelope from 'react-icons/lib/fa/envelope-square';
import GitHub from 'react-icons/lib/fa/github';
import Twitter from 'react-icons/lib/fa/twitter-square';
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

const App = () => (
  <div>
    {/* <Center> */}
    <CoverImage />
    <Body>
        <Center>
      {/* <A
        href="https://github.com/jessamyn27"
        target="_blank"
        rel="noreferrer noopener"
      > */}
        <Avatar />
        <h1>
          <A href="/">Jessamyn McTwigan</A>
        </h1>

        <h2>
          <Title>Full-Stack Developer</Title>
        </h2>

        <IconWrapper>
        <a
          href="mailto:jessamyn.mctwigan@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Envelope size={50} />
        </a>
        <a
          href="https://github.com/jessamyn27"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GitHub size={50} />
        </a>
        <a
          href="https://www.linkedin.com/in/jessamyn27"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Linkedin size={50} />
        </a>
      </IconWrapper>

      <p>
        <B>Hi! I'm a web developer and love to learn new things about front-end
        technology such as JS, React and functional reactive programming.</B>
      </p>
      <br></br>
      <p>
        <B>
        I think everyone in the world has the power to share knowledges and continue to learn.
      </B>
      </p>
<br></br>
<br></br>
<br></br>
<br></br>


      {/* <PostContainer /> */}
      </Center>
    </Body>
  </div>
);

export default App;
