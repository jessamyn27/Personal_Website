import styled from 'styled-components';

const IconWrapper = styled.div`
  ${'' /* text-align: center; */}
  margin-bottom: 15px;
  position: relative;


  a {
    cursor: pointer;
  }

   a + a {
     margin-left: 15px;
   }

  svg {
    cursor: pointer;
    color: #043B4A;
    transition: 1s ease-out;
    transition: 1s ease-in;
    ${'' /* stroke: #6E6A79; */}
  }
  &:hover {
    transform: scale(1.15);
    ${'' /* color: rgba(197, 199, 231, 1); */}
    transition: 1s ease-out;
    transition: 1s ease-in;
  }
`;

IconWrapper.displayName = 'IconWrapper';

export default IconWrapper;
