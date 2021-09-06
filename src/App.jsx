import React from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css'
import { AnswersList, Chats } from './components';
import FormDialog from './components/Forms/FormDialog';

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

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.selectAnswer = this.selectAnswer.bind(this)
  }

  handleClickOpen = () =>{
    this.setState({
      open: true
    })
  }

  handleClose = () =>{
    this.setState({
      open: false
    })
  }

  //questionをchatsに追加し、answersをセットする
  displayNextQuestion = (nextQuestionId)=>{
    const chats = this.state.chats

    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: 'question'
    })

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId
    })
  }

  //answerが選択されたら、そのanswerをchatsに追加し、displayNextQuestionIdに続く
  selectAnswer = (selectedAnswer, nextQuestionId) =>{
    switch(true){
      case(nextQuestionId === 'init'):
        setTimeout(() =>
          this.displayNextQuestion(nextQuestionId), 500
        )
      break;

      case(nextQuestionId === 'contact'):
        this.handleClickOpen();
      break;

      case /^https:*/.test(nextQuestionId):
        const a = document.createElement("a");
        a.href = nextQuestionId;
        a.target = '_blank'
        a.click();
        break;

      default:
        const chats = this.state.chats

        chats.push({
          text: selectedAnswer,
          type: 'answer'
        })

        this.setState({
          chats: chats
        })

        setTimeout(() =>
          this.displayNextQuestion(nextQuestionId), 1000)
      break;
    };
  };

  //initのanswerをセットする
 componentDidMount() {
    const initAnswer = '';
    this.selectAnswer(initAnswer, this.state.currentId);
  }

  componentDidUpdate() {
    const scrollarea = document.getElementById('scroll-area');
    if (scrollarea) {scrollarea.scrollTop = scrollarea.scrollHeight }
  };

  //ChatsとAnswersListにpropsを渡す
  render(){
    return(
    <div>
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats}/>
          <AnswersList answers={this.state.answers} select={this.selectAnswer} />
          <FormDialog open={this.state.open} handleClose={this.handleClose} handleClickOpen={this.handleClickOpen}/>
        </div>
      </section>
    </div>

    )};
}
