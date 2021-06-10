import React, { Component } from 'react'
import PokeList from './PokeList'

export default class Body extends Component {
    render() {
        return (
            <main>
                <section className="main-section">
                    <h2>{this.props.title}</h2>
                    <PokeList />
                </section>
            </main>
        )
    }
}
