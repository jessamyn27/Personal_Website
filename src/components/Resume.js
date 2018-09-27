import React, { Component } from 'react';
import styled from 'styled-components';
import resumess from '../statics/images/resumess.png';

const ResumePic = styled.div`
  background-image: url(${resumess});
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  height: 860px;
  width: 700px;
  position: relative;
  top: 30px;
  margin-bottom: 30px;
  border: none;
  border-radius: 5%;
  text-decoration: none;
  transition: 2s ease-out;
  transition: 1s ease-in;

    }
    &:hover {
      transform: scale(1.25);
      color: rgba(197, 199, 231, 1);
      transition: 2s ease-out;
      transition: 1s ease-in;
    }
`;

<div>
<button onclick="myFunction()">Try it</button>

<div id="ResumePic">
This is my DIV element.
</div>
</div>


function myFunction() {
    var x = document.getElementById("ResumePic");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// #myDIV {
//     width: 100%;
//     padding: 50px 0;
//     text-align: center;
//     background-color: lightblue;
//     margin-top: 20px;
// }


//
//
// class Resume extends Component {
//     constructor(props) {
//         super(props);
//         this.addActiveClass= this.addActiveClass.bind(this);
//         this.state = {
//             active: false,
//         };
//     }
//     toggleClass() {
//         const currentState = this.state.active;
//         this.setState({ active: !currentState });
//     };
//
//     render() {
//         return (
//             <div
//                 className={this.state.active ? 'ResumePic': null}
//                 onclick={this.toggleClass}
//             >
//                 <p>{this.props.text}</p>
//             </div>
//         )
//   }
// }
//
// class Test extends Component {
//     render() {
//         return (
//             <div>
//                 <Resume text={'1'} />
//                 <Resume text={'2'} />
//             </div>
//         );
//     }
// }
ResumePic.displayName = 'Resume';

export default ResumePic;
// export default Test;

// class ButtonParent extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       condition: false
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick() {
//     this.setState({
//       condition: !this.state.condition
//     })
//   }
//   render() {
//     return (
//       <ButtonChild
//         className={ this.state.condition ? "button toggled" : "button" }
//         toggleClassName={ this.handleClick }
//       >
//         click me
//       </ButtonChild>
//     )
//   }
// }
//
// class ButtonChild extends React.Component {
//   render() {
//     return (
//       <div
//         className={ this.props.className }
//         onClick={ this.props.toggleClassName }
//       >
//         { this.props.children }
//       </div>
//     )
//   }
// }
// export default ButtonParent;
// // ReactDOM.render(<ButtonParent />, document.getElementById('app'))
