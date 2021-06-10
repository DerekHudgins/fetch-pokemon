import React, { Component } from 'react'


export default class PokeItem extends Component {
    render() {
        return (
            <div>
                <div className='poke-section'>
                    <img src={this.props.url_image} alt='pokemon'/>
                </div>
                <h2>{this.props.title}</h2>
                <p>{this.props.discription}</p>
                <span className='discription'>
                    <p>Name: {this.props.name}</p>
                    <p>Type: {this.props.type_1}</p>
                    <p>Attack: {this.props.attack}</p>
                    <p>Abilty: {this.props.ability_1}</p>
                </span>
            </div>
        )
    }
}
