import React, { Component } from 'react'
import request  from 'superagent';

export default class PokeList extends Component {
    state = { Poke: [] }

    componentDidMount = async () => {
        const data = await request.get ('https://pokedex-alchemy.herokuapp.com/api/pokedex')
        this.setState({Poke: data.body
        });

        
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
