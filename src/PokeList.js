import React, { Component } from 'react'
import PokeItem from './PokeItem';
import { Link } from 'react-router-dom';

export default class PokeList extends Component {
    
    render() {
        return (
            <div>
                  {this.props.poke.map(pokemon => (<Link key={pokemon.id} to ={`/pokemon/${pokemon._id}`}><PokeItem url_image={pokemon.url_image} name={pokemon.pokemon} type_1 ={pokemon.type_1} attack={pokemon.attack} ability_1={pokemon.ability_1} /></Link>))}
            </div>
        )
    }
}
