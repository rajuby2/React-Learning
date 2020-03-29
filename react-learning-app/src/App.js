import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    person:[
      {name:"Rajkumar", age:33},
      {name:"Mithra", age:4},
      {name:"Vaishnavi", age:32},
    ]
  }
  persons=[]
  
  personsBuilder = ()=> { 
    this.state.person.forEach(element => this.persons.push(<Person name={element.name} age={element.age}/>))
    return <div>{this.persons}</div>;
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {this.personsBuilder()}                
        </p>
      </div>
    );
  }
}

export default App;
