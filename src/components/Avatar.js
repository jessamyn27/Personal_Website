import styled from 'styled-components';
import jessa from '../statics/images/jessa.png';

const Avatar = styled.div`
  background-image: url(${jessa});
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  height: 300px;
  width: 300px;
  position: relative;
  top: -130px;
  margin-bottom: -20px;
  border: none;
  border-radius: 100%;
  ${'' /* box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.95); */}
`;

Avatar.displayName = 'Avatar';

export default Avatar;
