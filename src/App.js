import React, { Component } from 'react';
import "./App.css";
import PersonApp from "./Person/Person.js";
import PersonApp1 from "./Person/Person1.js";
import Counter from "./Components/Counter.js"
import Counter5 from "./Components/count5.js"
import CountHook from "./Components/CountHooK.js";

class App extends Component {
  state = {  }
  render() { 
    return (<div className="inc">
            {/* <Counter/> */}
            {/* <Counter5/> */}
            <CountHook/>
            </div>
    );
              // <div className= 'App'>
              {/* <h1>Hello World!</h1>
              {/* <PersonApp/>
              <PersonApp/>
              <PersonApp/> */}
              {/* <PersonApp1/>
              <PersonApp1/> */}
              {/* <PersonApp1 name = "Prakash" age = '32'/>
             <PersonApp1 name = "Hash" age = '32'/>
             <PersonApp1 name = "Akash" age = '32'>
                 My address: wellington
            </PersonApp1> */} 
            // </div>      
       

      // return React.createElement(
      //   "div",
      //   { className: 'App'},
      //   React.createElement("h1", null, "My first React app")
      // );
  }
}
 
export default App;
