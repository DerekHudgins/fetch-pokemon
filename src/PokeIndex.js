import React, { Component } from 'react'
import request from 'superagent'
import PokeList from './PokeList';
import DropdownAtk from './DropdownAtk';
import DropdownType from './DropdownType';
import DropdownDir from './DropdownDir';
import Loading from './Loading';




const sleep = (x) => new Promise((res, rej) => setTimeout(() => { res() }, x))
export default class PokeIndex extends Component {
    state = { poke: [],
        query: '',
        sortOrder: 'asc',
        sortBy: '',
        loading: false,
        type: '',
        page: 1,
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
nextPage = async (e) => {
    await this.setState({ page: this.state.page + 1});
    this.fetchPokemon();
  }
  prevPage = async (e) => {
    await this.setState({ page: this.state.page - 1});
    this.fetchPokemon();
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
? `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=${this.state.sortBy}&direction=${this.state.sortOrder}&type_1=${this.state.type}&page=${this.state.page}`
:'https://pokedex-alchemy.herokuapp.com/api/pokedex';

const data = await request.get(URL)
await sleep(2000);
this.setState({loading : false})
this.setState({poke: data.body.results})
};

    render() {
        return (
            <div>
        <label htmlFor="input">
            Search For Pokemon 
        </label>
        <input onChange={this.handleSearch} />
        <DropdownDir handleDir = {this.handleDirectionChange}/>
        <DropdownType handleType = {this.handleTypeChange}/>
        <DropdownAtk handleAtt = {this.handleSortChange} />
        <button onClick={this.handleClick}>Search!</button>
        {this.state.loading
        ? <Loading/>
        :<PokeList poke={this.state.poke} />}
        {this.state.page - 1 > 0 && (
            <button onClick = {this.prevPage}>
            Prev Page ({this.state.page - 1})
            </button>
        )}
        <button onClick={this.nextPage}>
            Next Page ({this.state.page + 1})
        </button>
            </div>
        )
    }
}

