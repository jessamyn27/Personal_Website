// import React from 'react';
import styled from 'styled-components';
// import landscape1 from '../statics/images/landscape1.jpg';
// import portrait1 from '../statics/images/portrait1.jpg';
// import Media from 'react-media';
// import ProgressiveImage from 'react-progressive-bg-image';
// import landscapeX60 from '../statics/images/landscapeX60.jpg';
// import gradient from '../statics/images/gradient.png';
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
  font-family: 'Lato', sans-serif;

  ${'' /* background-image: url(${gradient}); */}
  ${'' /* height: auto;
  width: auto; */}
  ${'' /* background-color: aliceblue; */}
  background-size: cover;
  background-attachment: fixed;
  background-position: 100%;
  ${'' /* overflow: hidden; */}
  @media (min-width: 600px) {
    width: auto;
  }
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#92c2dd+0,e0d0bc+55,c4a1ad+75,205e7b+100 */
  background: rgb(146,194,221); /* Old browsers */
  background: -moz-linear-gradient(top, rgb(146,194,221) 0%, rgb(224,208,188) 55%, rgb(196,161,173) 75%, rgb(32,94,123) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgb(146,194,221) 0%,rgb(224,208,188) 55%,rgb(196,161,173) 75%,rgb(32,94,123) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgb(146,194,221) 0%,rgb(224,208,188) 55%,rgb(196,161,173) 75%,rgb(32,94,123) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#92c2dd', endColorstr='#205e7b',GradientType=0 ); /* IE6-9 */
`;

Body.displayName = 'Body';

export default Body;
