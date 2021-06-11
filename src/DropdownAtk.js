import React, { Component } from 'react'

export default class DropdownAtt extends Component {
  render() {
    return (
      <div>
          <p>Sort by Attack or Defense</p>
          <select onChange = {this.props.handleAtt}>
            <option value="">All</option>
            <option value="attack">Attack</option>
            <option value="defense">Defense</option>
          </select>
      </div>
    )
  }
}