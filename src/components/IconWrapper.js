import styled from 'styled-components';

const IconWrapper = styled.div`
  text-align: center;
  margin-bottom: 15px;

  a {
    cursor: pointer;
  }

  a + a {
    margin-left: 15px;
  }

  svg {
    color: #F7F0EA;
    ${'' /* stroke: #6E6A79; */}
  }
  ${'' /* &:hover {
    transform: scale(1.15);
    color: rgba(197, 199, 231, 1);
  transition: 2s ease-out;
  transition: 2s ease-in; */}
  }
`;

IconWrapper.displayName = 'IconWrapper';

export default IconWrapper;
