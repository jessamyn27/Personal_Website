import styled from 'styled-components';

const C = styled.h3`
  display: block;
  font-weight:lighter;
  text-decoration: none;
  color: #043B4A;
  font-size: 15px;
  ${'' /* padding-right: 25%; */}
  ${'' /* padding-left: 25%; */}
  text-align: left;
  max-width: 400px;
  font-weight: normal;
  font-size: regular;
  transition: 2s ease-out;
  transition: 2s ease-in;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    color: rgb(247,243,234);
    transition-duration: scroll-behavior:
    transition: 1s ease-out;
    transition: .5s ease-in;
  }
  `;

C.displayName = 'C';

export default C;


// color: #F7F0EA;
