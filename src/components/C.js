import styled from 'styled-components';

const C = styled.h3`
  display: block;
  font-weight:lighter;
  text-decoration: none;
  color: rgb(4,59,74, .7);
  font-size: 20px;
  ${'' /* padding-right: 25%; */}
  ${'' /* padding-left: 25%; */}
  text-align: left;
  max-width: 500px;
  font-weight: normal;
  font-size: regular;
  transition: 1s ease-out;
  transition: 1s ease-in;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    ${'' /* font-size: 20px; */}
    color: rgb(4,59,74, 1);
    transition-duration: scroll-behavior:
    transition: 1s ease-out;
    transition: .5s ease-in;
  }
  `;

C.displayName = 'C';

export default C;


// color: #F7F0EA;
