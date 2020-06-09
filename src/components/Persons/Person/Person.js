import React, {Component} from 'react';
import Proptypes from 'prop-types';
//import Radium from 'radium';
import classess from './Person.css';
//import Styledn from 'styled-components';

import Aux from '../../../hoc/auxilliary';
import withclass from './../../../hoc/Withclass';
import Authcontext from '../../../context/auth-context';


class Perso extends Component  {
   // componentDidMount() {
   //    document.querySelector('input').focus();
   // }
   componentDidMount() {
      this.inputelement.focus();
   }
   render () {
      console.log('[person.js] rendering')
 
      // return <p>i am a person and i am {Math.floor (Math.random () * 30)} years old</p>
      return (
         // <div className = 'person' style = {newstyle}>
      //<div className = {classess.person}>
      <Aux>
         <Authcontext.Consumer>
         {(context) => 
         context.authenticated ? <p>authentication</p> : <p>pls log in</p>}   
          </Authcontext.Consumer>
      <p key = 'i1' onClick={this.props.click}>i am a {this.props.name} and i am {this.props.age} years old</p>
         <p>(click the test above to delete)</p>
      <p key ='i2'>{this.props.children}</p>
      <input key ='i3'
      ref={(inputEl) => {this.inputelement = inputEl}}
       type = "text" 
      onChange = {this.props.changed}
      value = {this.props.name}/>
     
</Aux>
     // </div>
      );
   }
 
};

Perso.propTypes = {
   click: Proptypes.func,
   name: Proptypes.string,
   age: Proptypes.number,
   changed: Proptypes.func
};

//export default Radium(perso);
export default withclass(Perso,classess.person);
