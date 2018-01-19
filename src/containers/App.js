import React, { Component } from 'react';
import './App.css';

import Question from '../components/Question/Question';

class App extends Component {
  state = {
    questions:[
      {
        content: 'Quel est votre plat préféré',
        options: [
          {
            content: 'Pizza',
            good: false
          },
          {
            content: 'Paella',
            good: true
          },
          {
            content: 'Hamburger',
            good: false
          },
          {
            content: 'Sandwich',
            good: false
          }
        ],
        multi: true
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Quizz</h1>
        <div className="Questions">
          <Question 
            content={this.state.questions[0].content} 
            options={this.state.questions[0].options} 
            multi={this.state.questions[0].multi}
          />
        </div>
      </div>
    );
  }
}

export default App;
