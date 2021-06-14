import React, { Component } from 'react'
import  { request } from 'superagent'



const sleep = (x) => new Promise((res, rej) => setTimeout(() => { res() }, x))
export default class PokeIndex extends Component {
    state = { poke: [],
        query: '',
        sortOrder: 'asc',
        sortBy: '',
        loading: false,
        type: '',
}


componentDidMount = async () => {
await this.fetchPokemon();

}
handleSearch =  (e) =>{ 
this.setState({ query: e.target.value })
}
handleDirectionChange =  (e) => {
this.setState({
  sortOrder: e.target.value
})


}
handleSortChange =  (e) => {
this.setState({
  sortBy: e.target.value
})

}
handleTypeChange =  (e) => {
this.setState({
  type: e.target.value
})

}
handleClick = async () =>{
await this.fetchPokemon();
}
fetchPokemon = async () => {
this.setState({loading : true});

const URL = (this.state.query || this.state.sortBy || this.state.sortOrder || this.state.type) 
? `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=${this.state.sortBy}&direction=${this.state.sortOrder}&type_1=${this.state.type}`
:'https://pokedex-alchemy.herokuapp.com/api/pokedex';

const data = await request.get(URL)
await sleep(2500);
this.setState({loading : false})
this.setState({poke: data.body.results})
};
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
