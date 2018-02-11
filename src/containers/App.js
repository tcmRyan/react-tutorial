import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import Radium, { StyleRoot } from 'radium';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends Component {
    state = {
      persons: [
          {id: 1, name: 'Ryan', age: 33 },
          {id: 2, name: 'Max', age: 29 },
          {id: 3, name: 'Stephanie', age: 26 }
      ],
        otherState: 'some value',
        showPersons: false
    };

    deletePersonHandler = (personIndex) => {
        // Old way
        // const persons = this.state.persons.slice();
        // New way
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        // Bad way: Mutates original state
        // const person = this.state.persons[personIndex];
        const person = {
            ...this.state.persons[personIndex]
        };
        // Old way
        // const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        })

    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };

  render() {

      let persons = null;

      if ( this.state.showPersons ){
          persons = (
            <Persons
              persons={this.state.persons}
              changed={this.nameChangedHandler}
              clicked={this.deletePersonHandler}
            />
          );

      }

    return (
          <div className={classes.App}>
            <Cockpit
              appTitle={this.props.title}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonHandler}
            />
            {persons}
          </div>
    );
  }
}

export default App;