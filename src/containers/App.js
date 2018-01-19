import React, { Component } from 'react';
import './App.css';

import Question from '../components/Question/Question';

class App extends Component {
  state = {
    questions:[
      {
        content: 'Quel est votre plat préféré'
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Quizz</h1>
        <div className="Questions">
          <Question content={this.state.questions[0].content} />
        </div>
      </div>
    );
  }
}

export default App;
