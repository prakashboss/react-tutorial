import React from 'react';

const PersonApp1 = (props) => {
    return ( <div className = "Person">
             <h1>My name is {props.name}</h1>
             <p>I am a doctor</p>
             <p>My age is {props.age}</p>
             {/* <p>My current city is wellington</p> */}

             <h1> {props.children}</h1>

            <h2>Random number is {Math.floor(Math.random() * 35)}</h2>
             

             </div>
         );
}
 
export default PersonApp1;