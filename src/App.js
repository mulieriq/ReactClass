import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css'
import person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { name: 'Max', age: 26 },
      { name: 'Manu', age: 26 },
      { name: 'Steph', age: 26 }
    ],
    showPersons: false
  }
  switchNameHandler = (newName) => {
    console.log("Clicked")
    this.setState({
      person: [
        { name: newName, age: 26 },
        { name: 'Manu', age: 26 },
        { name: 'Steph', age: 26 }
      ]
    })
  }
  deletePerson = (index) => {
    // const  mtu = this.state.person.slice()
    const mtu = [...this.state.person]
    mtu.splice(index, 1)
    this.setState({ person: mtu })

  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => { return p.id === id })
    let person = {...this.state.person[personIndex]}
    person[personIndex].name = event.target.value;
    const people = [...this.state.person]
    people[personIndex] = person
    this.setState({
      person: people
    })
  }

  tooglePersonHandler = () => {
    const show = this.state.showPersons;
    this.setState({ showPersons: !show })

  }

  render() {


    var persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.person.map((e, index) => <Person key={index} changed={(event) => this.nameChangedHandler(event, index)} click={this.deletePerson.bind(this, index)} name={e.name} age={e.age} > And I play Hocky</Person>)}
        </div>
      );
    }

    const styles = {
      backgroundColor: 'blue'
    }
    return (
      <div className="Person">
        <button style={styles} onClick={this.tooglePersonHandler} >Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
