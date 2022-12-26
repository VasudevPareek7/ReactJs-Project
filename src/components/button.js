import React from 'react';

function MyButton() {
  function handleClick() {
    console.log('Checkout was clicked!');
  }

  return (
    <button onClick={handleClick}>
      <div className="card" >Checkout</div>
    </button>
  );
}

export default MyButton;
