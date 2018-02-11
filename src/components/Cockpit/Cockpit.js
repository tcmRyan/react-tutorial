import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  let btnClass = '';
  let assigned_classes = [];

  if ( props.showPersons ){
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assigned_classes.push( classes.red );
  }
  if (props.persons.length <=1) {
    assigned_classes.push( classes.bold );
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{ props.appTitle }</h1>
      <p className={assigned_classes.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>
        Toggle Person
      </button>
    </div>
  );
 };

export default cockpit;