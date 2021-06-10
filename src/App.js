import { Component } from 'react';
import './App.css';
import request from 'superagent';
import PokeList from './PokeList';



export default class App extends Component{
  state = { Poke: [] }

  componentDidMount = async () => {
      const data = await request.get ('https://pokedex-alchemy.herokuapp.com/api/pokedex')
      this.setState({Poke: data.body.results
      });

      
  }
  
  render() {
    return (
      <div className="App">
        <PokeList poke={this.state.Poke} />
      

      </div>
    );
  }
  
  }
  


