import styled from 'styled-components';

const BigTitle = styled.h1`
  display: block;
  font-weight: normal;
  text-decoration: none;
  color: rgb(4,59,74, 1);
  font-size: 50px;
  margin-right: 20%;
  margin-left: 20%;
  text-align: center;
  font-weight: normal;
  font-size: regular;
  font-family: 'Lato', sans-serif;
  transition: 1s ease-out;
  transition: .5s ease-in;
  padding-top: 20px;
}
&:hover {
  ${'' /* transform: scale(1.2); */}
  color: rgb(4,59,74, 1);
  transition: 1s ease-out;
  transition: 1s ease-in;
}
`;

BigTitle.displayName = 'BigTitle';

export default BigTitle;
