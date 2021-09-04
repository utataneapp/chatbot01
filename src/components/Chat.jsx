import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import '../assets/styles/style.css'
import Picture from '../assets/img/社長のアイコン.png'
import noFace from '../assets/img/no-profile.png'

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

const Chat = (props) =>{
  const isQuestion = (props.type === 'question')
  const classes = isQuestion ? ('p-chat__row') : ('p-chat__reverse');

  return(
    <ListItem className={classes}>
        <ListItemAvatar>
          {isQuestion ? (
          <Avatar alt="icon" src={Picture} />):(
          <Avatar alt="icon" src={noFace} />)}
        </ListItemAvatar>
        <div className="p-chat__bubble">{props.text}</div>
    </ListItem>
  )
}

export default Chat;
