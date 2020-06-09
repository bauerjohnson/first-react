import React, { Component } from 'react';
import classess from'./App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Persons/Cockpit/Cockpit';
import withclass from '../hoc/Withclass';
import Aux from '../hoc/auxilliary';
import Authcontext from './../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[app.js] constructor'); 
  }
  
state = {
 person : [
   {id : '4hrrbf',name :'jeremiah', age: 10},
   {id : 'g4gr4jr',name : 'johnson', age:11},
   {id : 'dhbe38d',name : 'your name', age:12}
 ],
 otherState : 'some other value',
showPerson: false,
showcockpit:true,
changeCounter:0,
authenticated : false

};

static getDerivedStateFromProps(props, state) {
  console.log('[app.js] getderivedstateforprops', props)
  return state;
}

// componentWillMount() {
//   console.log('[app.js] componentwillmount'); 
// } only older version of react recognize dis

componentDidMount() {
  console.log('[app.js] componentdidmount');
}

shouldComponentUpdate(nextProps, nextState) {
  console.log('[app.js] shouldcomponentupdate');
  return true;
}



componentDidUpdate() {
  console.log('[app.js] componentdidupdate');
}

toggleperson = () => {
const showit = this.state.showPerson;
this.setState({showPerson: !showit});
}

loginhandler = () => {
  this.setState({authenticated : true})
}

switchname = (newname) => {
 // console.log('clicked');
 this.setState({person : [
  {name :newname, age:'10'},
  {name : newname, age:'11'},
  {name : newname, age:'26'}
] 
})
}

deletepersonhandler = (personallindex) => {
const person = [...this.state.person];
person.splice(personallindex, 1);
this.setState({person: person})
}


namechange = (event, id) => {
  const name = this.state.person.findIndex(p => { 
  return  p.id === id;
  })

  const personn = {...this.state.person[name]}

    personn.name = event.target.value;

    const persons = [...this.state.person];
    persons[name] = personn;
    
    this.setState( (prevState, props) => {
      return {
        person : persons, changeCounter:prevState.changeCounter + 1};
      }); 
    };
      

  render() { 
      console.log('[app.js] render')
    let persons = null;
    

    if ( this.state.showPerson ) {
    persons =
    <Persons 

    person = {this.state.person}
    click = {this.deletepersonhandler}
    changed = {this.namechange}
    authenticate = {this.state.authenticated} /> ;
     } 

    //let classes = ['red', 'bold'].join(' '); 
    let assignclasses = [];
    
    if (this.state.person.length <= 2) {
      assignclasses.push(classess.red); 
    }

    if (this.state.person.length <= 1) {
      assignclasses.push(classess.bold); 
    }

 return (
   //<StyleRoot>
   
   //<Withclass newhd = {classess.App}>
   <Aux>
     <button 
     onClick = {() => {this.setState({showcockpit:false})
     }}
     >remove cockpit</button>
     <Authcontext.Provider 
     value = {{
       authenticated : this.state.authenticated,
      login : this.loginhandler}}> 
{this.state.showcockpit ? (
<Cockpit title = {this.props.apptitle}
        showPerson = {this.state.showPerson}  
          personLength = {this.state.person.length}
           click = {this.toggleperson} 
          // login = {this.loginhandler}
            />
): null}
       {persons} 
       </Authcontext.Provider>
       </Aux>  
  //</Withclass>
  


 );

  
  } 
}

export default withclass(App,classess.App);


