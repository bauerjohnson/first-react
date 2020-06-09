import React, {PureComponent} from 'react';

import Person from './Person/Person';


class Persons extends PureComponent {
   // static getDerivedStatefromProps(props, state) {
   //    console.log('[Persons.js] getderivedstatefromprops');
   //    return state;
   // } we dont ave an initial state for now

   // shouldComponentUpdate(nextProps, nextState) {
   //    console.log('[Persons.js] shouldcomponentupdate');
   //    if(nextProps.person !== this.props.person || 
   //       nextProps.changed !== this.props.changed || 
   //       nextProps.click !== this.props.click) {
   //       return true;
   //    } else {
   //    return false;
   // };
   // } purecomponent instead 

   getSnapshotBeforeUpdate(nextProps, nextState) {
      console.log('[Persons.js] getsnapshotbeforeupdate');
      return {mesage : 'snapshot!'};
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('[Person.js] componentdidupdate');
      console.log(snapshot);
   }

   componentWillUnmount() {
      console.log('[persons.js] componentWillUnmount');
   }

   render () {
      console.log('[app.js] persons rendering...');
      return this.props.person.map( (personal, index) => { 
         return (
         <Person 
         click={() => this.props.click(index)} 
         name={personal.name }
          age={personal.age}
          key = {personal.id}
          changed = {(event) => this.props.changed(event, personal.id)}
          //auth = {this.props.authenticate}

             />
         )      
      })

   }
 
};
     export default Persons;