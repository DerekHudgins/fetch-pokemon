import { Component } from 'react';
import './App.css';
import request from 'superagent';
import PokeList from './PokeList';
import DropdownAtk from './DropdownAtk';
import DropdownType from './DropdownType';
import DropdownDir from './DropdownDir';
import Loading from './Loading';
import Header from './Header';


const sleep = (x) => new Promise((res, rej) => setTimeout(() => { res() }, x))
export default class App extends Component{
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
    await sleep(5000);
    this.setState({loading : false})
    this.setState({poke: data.body.results})
    };
  
  render() {
    return (
      <div className="App">

        <Header />
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
        
      </div>
    );
  }
  
  }
  


