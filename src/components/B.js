import styled from 'styled-components';

const B = styled.b `
  display: block;
  font-weight:lighter;
  text-decoration: none;
  color: rgb(4,59,74, .8);
  font-size: 20px;
  margin: auto;
  text-align: center;
  font-weight: normal;
  ${'' /* font-size: regular; */}
  font-family: 'Lato', sans-serif;
  transition: 1s ease-out;
  transition: 1s ease-in;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;

  &:hover {
    transform: scale(1.1)

    color: rgb(4,59,74, 1);
    transition-duration: scroll-behavior:
    transition: 1s ease-out;
    transition: .5s ease-in;
  }
`;
B.displayName = 'B';

export default B;
