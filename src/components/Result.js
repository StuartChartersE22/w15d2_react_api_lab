import React from 'react'

const Result = (props) => {
  if(!props.selectedPokemon) return null;
  return (
    <div>
      <h2>{props.selectedPokemon.name}</h2>
      <img src={props.selectedPokemon.sprite}></img>
    </div>
  );
}

export default Result;
