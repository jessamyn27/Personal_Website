import styled from 'styled-components';

const BigTitle = styled.h1`
  display: block;
  font-weight: normal;
  text-decoration: none;
  color: #f7f3ea;
  font-size: 50px;
  margin-right: 20%;
  margin-left: 20%;
  text-align: center;
  font-weight: normal;
  font-size: regular;
  font-family: 'Lato', sans-serif;
  transition: 12s ease-out;
  transition: .5s ease-in;
}
&:hover {
  ${'' /* transform: scale(1.45); */}
  color: rgba(197, 199, 231, 1);
  transition: 12s ease-out;
  transition: 2s ease-in;
}
`;

BigTitle.displayName = 'BigTitle';

export default BigTitle;
