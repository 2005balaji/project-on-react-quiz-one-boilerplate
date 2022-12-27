import React, { Component } from 'react'
import './ResultComponent.css'
export default class ResultComponent extends Component {
  render() {
    return (
      <div>
        <h1 style={{color:'red'}} >Result</h1>

          <div className='container'>
          <h3 style={{color:'black'}}>Remarks</h3>
          <h1 style={{color:'blue'}}>Your Score is 20%</h1>


          <div className='resultBox'>

            <div className='resultBox-1'>
              
              <h4>Total Number of question</h4>
              
              <span>15</span>
              
            </div>

            <div className='resultBox-1'> 
          
              <h4>Number of attempted questions</h4>
              <span>15</span>
          
            </div>

            <div className='resultBox-1'>
              
              <h4>Number of correct answers</h4>
              <span>15</span>

            </div>

            <div className='resultBox-1'>
              
              <h4> number of wrong answers</h4>
              <span>15</span>

            </div>

          </div>

          </div>
        <br />
          <div className='endButtons'>
            <button style={{color:'purple'}}>
            Play Again
            </button>

            <button style={{color:'green'}}>
              Back to Home 
            </button>
          </div>



      </div>
      
    )
  }
}
