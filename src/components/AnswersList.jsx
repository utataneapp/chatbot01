import React from 'react';
import { Answer } from '.';


const AnswersList = (props) =>{
  return(
    <div className="c-grid__answer">
      {props.answers.map((value, index) =>{
       return <Answer content={value.content}  key={index.toString()} select={props.select} nextId={value.nextId}/>
      })}
    </div>

  )
}

export default AnswersList;
