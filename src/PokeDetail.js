import React, { Component } from 'react'
import request from 'superagent';
import Loading from './Loading';
import PokeItem from './PokeItem';
export default class PokeDetail extends Component {
  state = {
    pokeDetail: {},
    loading: false,
};

componentDidMount() {
    this.fetchDetail();
}
fetchDetail = async () => {
this.setState({ loading: true });
const apiId = this.props.match.params.poke;
const data = await request.get(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex/${apiId}`
);
this.setState({ pokeDetail: data.body });
this.setState({ loading: false });}
render() {
    return (
    <div className='pokeItemDiv'>
        {this.state.loading && <Loading/>}
                {!this.state.loading && (
                    <>
                        <h2>Welcome to Poke Details Page</h2>
                        <div className='pokeItemDivDiv'>
                        <PokeItem 
                        name={this.state.pokeDetail.pokemon} 
                        url_image = {this.state.pokeDetail.url_image} 
                        attack = {this.state.pokeDetail.attack}
                        ability_1 = {this.state.pokeDetail.ability_1}
                        type_1 = {this.state.pokeDetail.type_1} /> </div>
                    </>
                )}
        </div>
    )
}
}