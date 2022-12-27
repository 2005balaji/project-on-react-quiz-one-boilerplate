import React, { Component } from 'react'
import './HomeComponent.css'
export default class HomeComponent extends Component {
  render() {
    return (
      <div className='body'>
        <div><h1>Quiz App</h1></div>
        <div>
            <button id='button'>Play</button>
        </div>

      </div>
    )
  }
}
