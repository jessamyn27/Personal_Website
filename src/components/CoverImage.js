/* global window */
import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import ProgressiveImage from 'react-progressive-bg-image';
// import landscapeX60 from '../statics/images/landscapeX60.jpg';
import gradient from '../statics/images/gradient.png';
// import portraitX60 from '../statics/images/portraitX60.jpg';
// import landscape1 from '../statics/images/landscape1.jpg';
// import portrait1 from '../statics/images/portrait1.jpg';

/**
 * matchMedia polyfill
 * set default value to true
 * ref: https://github.com/WickyNilliams/enquire.js/issues/82#issuecomment-26990494

 */
window.matchMedia =
  window.matchMedia ||
  function matchMedia() {
    return {
      matches: true, // Desktop First
      addListener: () => {},
      removeListener: () => {},
    };
  };

const StyledProgressiveImage = styled(ProgressiveImage)`
  height: 180px;
  width: auto;
  background-color: aliceblue;
  background-size: auto;
  background-attachment: fixed;
  background-position: 100%;
  background-position: bottom;
  overflow: hidden;
`;

const CoverImage = () => (
  <Media query={{ minWidth: 1000 }}>
    {matches => (
      <StyledProgressiveImage
        src={gradient}
      />
    )}
  </Media>

);

CoverImage.displayName = 'CoverImage';

export default CoverImage;
