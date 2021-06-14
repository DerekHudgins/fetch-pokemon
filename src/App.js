import { Component } from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokeIndex from './PokeIndex';
import Home from './Home';
import PokeDetail from './PokeDetail';



export default class App extends Component{
 
  render() {
    return (
      <BrowserRouter >
      <div className="App">
        <Header />
        <Switch>
        <Route path="/pokemon/:poke" exact component={PokeDetail}/>
        <Route path='/pokemon'exact component={PokeIndex} />
        <Route path='/' exact Component={Home} />
        </Switch>
        
    
        
      </div>
      </BrowserRouter>
    );
  }
  
  }
  


