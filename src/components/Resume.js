import styled from 'styled-components';
import resumess from '../statics/images/resumess.png';

const Resume = styled.div`
  background-image: url(${resumess});
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  height: 550px;
  width: 400px;
  position: relative;
  top: 30px;
  margin-bottom: -20px;
  border: none;
  border-radius: 5%;
  text-decoration: none;
  ${'' /* box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.95); */}
`;

Resume.displayName = 'Resume';

export default Resume;
