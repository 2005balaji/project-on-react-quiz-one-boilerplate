import React, { Component } from 'react'
import './QuizComponent.css'
export default class QuizComponent extends Component {
  render() {
    return ( <div>


      <div className='body'>

        <div className='container'>
          <div>
            <h1>Question</h1>
          </div>

          <div className='questionNumber'>
          1 of 15
          </div>

          <div className='question'>
            <h2>which is the only animal that can jump </h2>
          </div>

                  
          <div className='optionButtons'>
          
          <button>
            Option A
          </button>

          <button>
            Option B
          </button>

          <button>
            Option C
          </button>

          <button>
            Option D
          </button>

          </div>
          <br /><br />


          <div className='responseButtons'>
            <button className='Previous'>
              Previous
            </button>
            
           <button className='Next'>
              Next 
           </button>
          
             <button className='Quit'>
              Quit
            </button>



          </div>

        </div>
        
      </div>

        

          </div>

    )
  }
}
