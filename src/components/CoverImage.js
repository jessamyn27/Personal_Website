/* global window */
import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import ProgressiveImage from 'react-progressive-bg-image';
// import landscapeX60 from '../statics/images/landscapeX60.jpg';
// import gradient1 from '../statics/images/gradient1.png';
// import portraitX60 from '../statics/images/portraitX60.jpg';
// import landscape1 from '../statics/images/landscape1.jpg';
// import portrait1 from '../statics/images/portrait1.jpg';

/**
 * matchMedia polyfill
 * set default value to true
 * ref: https://github.com/WickyNilliams/enquire.js/issues/82#issuecomment-26990494

//  */
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
//   height: 180px;
//   width: auto;
//   background-color: white;
//   background-size: auto;
//   background-attachment: fixed;
//   background-position: 100%;
//   background-position: top;
//   overflow: hidden;
// `;
//
// const CoverImage = () => (
//   <Media query={{ minWidth: 100 }}>
//     {matches => (
//       <StyledProgressiveImage
//         src={{ color: '' }}
//       />
//     )}
//   </Media>
//
// );

const CoverImage = styled.div`
  padding: 0 5px;
  margin: 0 auto;
  font-family: 'Lato', sans-serif;
  ${'' /* //   overflow: hidden; */}
  height: 180px;
  //   width: auto;

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

  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#92c2dd+0,efece8+100 */
  background: rgb(146,194,221); /* Old browsers */
  background: -moz-linear-gradient(top, rgb(146,194,221) 0%, rgb(239,236,232) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgb(146,194,221) 0%,rgb(239,236,232) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgb(146,194,221) 0%,rgb(239,236,232) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#92c2dd', endColorstr='#efece8',GradientType=0 ); /* IE6-9 */

  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#efece8+0,92c2dd+100 */

`;

CoverImage.displayName = 'CoverImage';

export default CoverImage;
