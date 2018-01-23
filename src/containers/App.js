import React, { Component } from 'react';
import './App.css';
import Questions from '../assests/Questions';

import Question from '../components/Question/Question';
import Count from '../components/Count/Count';
import Results from '../components/Results/Results';

let compo = null;

class App extends Component {
  state = {
    questions:Questions,
    actual:0,
    answers:[],
    completed: false,
    nbGoog:0
  }

  onSubmitAnswer = (it) => {
    console.log(it.target)
    const answers = [...this.state.answers]
    let questionAnswer = {};
    questionAnswer.id = this.state.actual;
    questionAnswer.answer = this.state.questions[this.state.actual].answer;
    const newAnswer = answers.concat(questionAnswer);
    this.setState({answers:newAnswer});
    
    if (this.state.actual < this.state.questions.length-1) {
      this.setState({actual: this.state.actual + 1})
      compo = null;
    } else {
      this.setState({completed: true}, ()=>{
        this.getResults()
      })      
    }

  }

  onItemChanged = (it) => {
     let answer = null
     if (this.state.questions[this.state.actual].multi){
       answer.push(it.target.id);
     } else {
       answer = it.target.id
     }
     const questions = [...this.state.questions];
     questions[this.state.actual].answer = answer;
     this.setState({questions});
     //it.target.checked=false;
  }

  getResults = () => {
    let good = 0;
    let good_answers = [];
    for (let ans in this.state.questions){
      for (let g in this.state.questions[ans].options){
        if (this.state.questions[ans].options[g].good) {
          good_answers.push(this.state.questions[ans].options[g].content)          
        }
      }
    }
    for (let i in this.state.answers){
      if (this.state.answers[i].answer === good_answers[i]){
        good++;
      }
    }
    this.setState({nbGoog: good})
  }

  render() {
    console.log(compo);
    compo = (
      <div className="Questions">
      <Question 
            content={this.state.questions[this.state.actual].content} 
            options={this.state.questions[this.state.actual].options} 
            multi={this.state.questions[this.state.actual].multi}
            clicked={this.onSubmitAnswer}
            onItemChanged={this.onItemChanged}
            id={this.state.actual}
            answer={this.state.questions[this.state.actual].answer}
          />
      </div>
    )

    if (this.state.completed) {
      compo = <Results good={this.state.nbGoog} total={this.state.questions.length} />
    }

    return (
      <div className="container">
        <h1 className="App">Quizz</h1>
        <Count count={this.state.actual+1} total={this.state.questions.length}/>
        
          {compo}
        </div>
      
    );
  }
}

export default App;
