import React from 'react'

const SelectBox = (props) => {

  function handleChange(evt) {
    props.onPokemonSelected(evt.target.value);
  }

  const options = props.pokemons.map((pokemon, index) => {
    return <option value={index} key={index}>{pokemon.name}</option>;
  })

  return (
    <select defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Select a Pokemon</option>
      {options}
    </select>
  );
}

export default SelectBox;
