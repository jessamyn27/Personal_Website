import styled from 'styled-components';

const Small = styled.small`
  display: block;
  font-size: 27px;

    text-decoration: none;
    color: rgb(247,243,234);
    font-size: 23px;
    font-weight: normal;
    font-size: regular;
    text-align: center;
    margin-right: 20%;
    margin-left: 20%;
    text-align: center;
    margin: 0 auto;
    ${'' /* margin-top: -400px; */}
    font-family: 'Lato', sans-serif;
    transition: 2s ease-out;
    transition: 2s ease-in;



  &:hover {
    color: rgb(247,243,234, .1);
    transition: 2s ease-out;
    transition: 2s ease-in;
  }
`;

Small.displayName = 'Small';

export default Small;
