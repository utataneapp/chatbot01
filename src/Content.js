import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import defaultDataset from './dataset';

const Content = (props) =>{
  const db = defaultDataset;
  const [content, setContent ] = useState(db.a.content);
  const [nextId, setNextId] = useState(db.a.nextId);

  const next = () =>{
    setContent(db.nextId.content)
    setNextId({db}.{nextId}.nextId)
    ,[]};

 const useStyles = makeStyles((theme) =>({
   margin:{
     margin: theme.spacing(5),
   },

   styles:{
     fontSize: 28,
   }
 }));

 const classes = useStyles();

  return(
  <div>
    <div>
      <text  className={classes.styles}>{content}</text>
    </div>
    <div>
    <Button  variant="outlined" size="large" color="primary" className={classes.margin} onClick={next}>卑猥なボタン</Button>
    </div>
  </div>
  )
}

export default  Content;
