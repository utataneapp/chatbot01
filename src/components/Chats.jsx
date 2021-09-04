import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import{ Chat } from './index'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const Chats = (props) =>{
  return(
    props.chats.map((value)=>{
      return <Chat text={value.text} type={value.type}/>
    })
  )
}

export default Chats;
