import React, { Component } from 'react';
import File from 'react-icons/lib/fa/file-text';
import resumess from '../statics/images/resumess.png';
import ResumePic from './Resume';
import styled from 'styled-components';

class Parent extends Component {
  constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render () {
    return (

        <button style={{background: 'none', border: 'none', outline: 'inherit', curser: 'pointer', top: '20px' }} onClick={this.toggleHidden.bind(this)}><File size={43}/>
        {!this.state.isHidden && <Child />}
      </button>
    )
  }
}

const Child = () => (
<button style={{background: 'none', border: 'none', outline: 'inherit', color: 'inherit', display: 'block', top: '30px'}}>
      <ResumePic/>
  </button>
)

export default Parent;
