import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>Current price: $<strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(ctrl => (
        <BuildControl key={ctrl.label} label={ctrl.label} 
        addIngredient={() => props.addIngredient(ctrl.type)} 
        removeIngredient={() => props.removeIngredient(ctrl.type)}
        disabled={props.disabled[ctrl.type]}/>
      ))}
    </div>
  )
}

export default BuildControls

