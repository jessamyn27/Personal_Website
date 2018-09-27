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
  ${'' /* padding: 0 5px; */}
  ${'' /* margin: 0 auto; */}
  font-family: 'Lato', sans-serif;
  margin-right: auto;
  margin-left:  auto;
  ${'' /* max-width: 960px; */}
  padding-right: 25px;
  padding-left:  25px;
  height: auto;
  background-size: cover;
  background-attachment: fixed;
  background-position: 100%;
  ${'' /* overflow: hidden; */}
  @media (min-width: 600px) {
    width: auto;
  }
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#abd0e5+0,e7dacb+55,d1b7c0+75,3191bd+100 */
  background: rgb(171,208,229); /* Old browsers */
  background: -moz-linear-gradient(top, rgb(171,208,229) 0%, rgb(231,218,203) 55%, rgb(209,183,192) 75%, rgb(49,145,189) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgb(171,208,229) 0%,rgb(231,218,203) 55%,rgb(209,183,192) 75%,rgb(49,145,189) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgb(171,208,229) 0%,rgb(231,218,203) 55%,rgb(209,183,192) 75%,rgb(49,145,189) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#abd0e5', endColorstr='#3191bd',GradientType=0 ); /* IE6-9 */

${'' /* // darker version:  */}
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#92c2dd+0,e0d0bc+55,c4a1ad+75,205e7b+100 */

`;

Body.displayName = 'Body';

export default Body;
