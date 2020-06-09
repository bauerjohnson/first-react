import React, {useEffect} from 'react';

import classess from'./Cockpit.css'; 
import Authcontext from '../../../context/auth-context';

const cockpit = (props) => {
  useEffect(() => {
    console.log('[cockpit.js] useEffect');
    setTimeout(() => {
      alert('saved item to cloud');
      },1000);
    ///http request...
    return () => {
      console.log('[cockpit.js] cleanup done')
    }
  },[]
  );

  
     let assignclasses = [];
    
    let bt = '';

    if (props.showPerson){
        bt = classess.Red;
    }
   

    if (props.personLength <= 2) {
      assignclasses.push(classess.red); //classes = red
    }

    if (props.personLength <= 1) {
      assignclasses.push(classess.bold); //classes = bold n red
    }
  return (
<div className = {classess.Cockpit}>
  <h1>{props.title}</h1>
{/* <p className = {classes}>this is working</p> */}
<p className = {assignclasses.join(' ')}>this is really working</p>
<button className={bt} onClick = {props.click}>HIDE</button> 
 <Authcontext.Consumer>
  {(context) => <button onClick = {context.login}>log in</button>}  
   </Authcontext.Consumer>
  </div>
  )};
  
export default React.memo(cockpit);