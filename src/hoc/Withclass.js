import React from 'react';

// const withclass = props => (
//     <div className = {props.newhd}>
//     {props.children}

//     </div>
// );

const withclass = (Wrappedcomponent, className) => {
return props => (
   < div className = {className}>
       <Wrappedcomponent {...props}/>
       </div>
);
};


export default withclass;