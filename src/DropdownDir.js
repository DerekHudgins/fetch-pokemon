import React, { Component } from 'react'

export default class DropdownDir extends Component {
  render() {
    return (
      <div>
        <p>Sort by Ascending or Descending</p>
        <select onChange = {this.props.handleDir}>
          <option value="">Any Direction</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    )
  }
}