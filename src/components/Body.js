// import React from 'react';
import styled from 'styled-components';
// import landscape1 from '../statics/images/landscape1.jpg';
// import portrait1 from '../statics/images/portrait1.jpg';
// import Media from 'react-media';
// import ProgressiveImage from 'react-progressive-bg-image';
// import landscapeX60 from '../statics/images/landscapeX60.jpg';
import gradient from '../statics/images/gradient.png';
//
//
// window.matchMedia =
//   window.matchMedia ||
//   function matchMedia() {
//     return {
//       matches: true, // Desktop First
//       addListener: () => {},
//       removeListener: () => {},
//     };
//   };
//
// const StyledProgressiveImage = styled(ProgressiveImage)`
//   height: calc(100vh - 120px);
//   width: auto;
//   background-color: aliceblue;
//   background-size: cover;
//   background-attachment: fixed;
//   background-position-y: 60%;
//   background-position-x: center;
//   overflow: hidden;
// `;
//
// const Body = () => (
//   <Media query={{ minWidth: 1000 }}>
//     {matches => (
//       <StyledProgressiveImage
//         src={matches ? landscape1 : portrait1}
//         placeholder={matches ? landscapeX60 : portraitX60}
//       />
//     )}
//   </Media>
// );
//
// Body.displayName = 'Body';
//
// export default Body;




const Body = styled.div`
  padding: 0 5px;
  margin: 0 auto;
  background-image: url(${gradient});
  height: auto;
  width: auto;
  background-color: aliceblue;
  background-size: auto;
  background-attachment: fixed;
  background-position: 100%;
  background-position: bottom;
  ${'' /* overflow: hidden; */}
  @media (min-width: 600px) {
    width: auto;
  }
`;



Body.displayName = 'Body';

export default Body;
