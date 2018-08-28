import React from 'react';
import SelectBox from '../components/SelectBox.js'
import Result from '../components/Result.js'

class PokeBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemons:[],
      selectedPokemon: null
    }

    this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
  }

  handlePokemonSelected(index) {
    const selectedPokemon = this.state.pokemons[index];
    fetch(selectedPokemon.url)
      .then((res) => {
        return res.json();
      })
      .then((pokeInfo) => {
        fetch(pokeInfo.forms[0].url)
          .then((res) => {
            return res.json();
          })
          .then((pokeForms) => {
            const spriteURL = pokeForms.sprites.front_default;
            const pokemonFullDets = {name: pokeForms.name, sprite: spriteURL};
            this.setState({selectedPokemon: pokemonFullDets})
          })
      })
    this.setState({selectedPokemon: selectedPokemon})
  }

  componentDidMount() {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151'
    fetch(url)
     .then((res) => {
       return res.json();
     })
     .then((gen1Info) => {
       const pokemons = gen1Info.results
       this.setState({pokemons: pokemons})
     })
  }

  render(){
    return (
      <div>
        <SelectBox pokemons={this.state.pokemons} onPokemonSelected={this.handlePokemonSelected}/>
        <Result selectedPokemon={this.state.selectedPokemon}/>
      </div>
    );
  }

}

export default PokeBox;
