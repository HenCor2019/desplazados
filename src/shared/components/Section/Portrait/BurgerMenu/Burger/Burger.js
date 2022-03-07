import React from 'react';

import classes from './Burger.module.scss';

function Burger({ open = false, onClick = () => {} }) {
  const burgerClases = [classes['burger-button']];

  if (open) {
    burgerClases.push(classes.open);
  }

  return (
    <button
      onClick={onClick}
      className={burgerClases.join(' ')}
    >
      <div />
      <div />
      <div />
    </button>
  );
}

export default Burger;
