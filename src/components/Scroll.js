import styled from 'styled-components';
import React, {Component} from 'react';
import Up from 'react-icons/lib/fa/chevron-up';
import {Link} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';

const Scrollstyle = styled.a`
  text-decoration: none;
  color: rgb(4,59,74, 1);
  font-size: 27px;
  font-weight: normal;
  font-size: regular;
  text-align: center;
  margin-right: 20%;
  margin-left: 20%;
  text-align: center;
  margin: 0 auto;
  margin-top: -400px;
  font-family: 'Lato', sans-serif;
  transition: 1s ease-out;
  transition: 1s ease-in;
  ${'' /* position: fixed; */}

&:hover {
  color: rgb(247,243,234, 1);
  transition: 1s ease-out;
  transition: 1s ease-in;
}
`;

class Scroll extends Component {
  render() {
    return (
      <div>
        <Link to='/'><Up size={50} position={'relative'}/>
          <Route path='/' />
      </Link>

      </div>
    )}
  }

Scroll.displayName = 'Scroll';

export default Scroll;
