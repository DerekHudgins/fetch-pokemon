import React, { Component } from 'react'
import PokeItem from './PokeItem';

export default class PokeList extends Component {
    
    render() {
        return (
            <div>
                  {this.props.poke.map(pokemon => <PokeItem url_image={pokemon.url_image} name={pokemon.pokemon} type_1 ={pokemon.type_1} attack={pokemon.attack} ability_1={pokemon.ability_1} />)}
            </div>
        )
    }
}
