import React from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css'
import { AnswersList, Chats } from './components';
import { ThemeProvider } from '@material-ui/styles';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      answers:[],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false

    }
  }

  initAnswer = () =>{
    const initDataset  = this.state.dataset[this.state.currentId];
    const initAnswers　= initDataset.answers;
    this.setState({
      answers: initAnswers
    })
  }

  initChat = ()=>{
    const initDataset = this.state.dataset[this.state.currentId];
    const chat = {
      text: initDataset.question,
      type: 'question'
    }
    const chats = this.state.chats

    chats.push(chat)

    this.setState({
      chats: chats
    })
  }

  displayNextQuestionId = (nextQuestionId)=>{
    const chats = this.state.chats
    chats.push({
      text: this.state.dataset.nextQuestionId.question,
      type: 'question'
    })

    this.setState({
       answers: this.state.defaultDataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId
    })
  }

  selectAnswer = (selectedAnswer, nextQuestionId) =>{
    switch(true){
      case (nextQuestionId === 'init'):
        break;
      default:

        const chats = this.state.chats

        chats.push({
          text: selectedAnswer,
          type: 'answer',
        })

        this.setState({
          chats: chats
        })

      break;
    }
  }


  componentDidMount(){
    this.initAnswer();
    this.initChat();
  }

  render(){
    return(
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats}/>
          <AnswersList answers={this.state.answers}/>
        </div>
      </section>
    )
  }

}
