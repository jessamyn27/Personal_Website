import styled from 'styled-components';
import jessa from '../statics/images/jessa.png';

const Avatar = styled.div `
  background-image: url(${jessa});
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  height: 300px;
  width: 300px;
  position: relative;
  top: -130px;
  margin-bottom: -150px;
  border: none;
  border-radius: 100%;
  transition: .2s ease-out;
  transition: .2s ease-in;
  }
  &:hover {
  transform: scale(1.2);
  color: rgb(4,59,74, 1);
  transition: .2s ease-out;
  transition: .2s ease-in;
  }
`;

Avatar.displayName = 'Avatar';

export default Avatar;
