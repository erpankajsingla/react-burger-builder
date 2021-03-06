import React from 'react';

import Ingredient from './Ingredient/Ingredient';
import classes from './Burger.module.css';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
  .map(key => {
    return [...Array(props.ingredients[key])].map((_, i) => {
      return <Ingredient key={key+i} type={key}/>
    });
  })
  .reduce((arr, el) => {
    return arr.concat(el);
  }, []);

  if(transformedIngredients.length < 1) {
    transformedIngredients = <p>Please start adding ingredients</p>
  }

  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top"/>
      {transformedIngredients}
      <Ingredient type="bread-bottom"/>
    </div>
  );
};

export default burger;

