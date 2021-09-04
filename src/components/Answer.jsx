import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {

// }));

const Answer = (props) =>{
  // const classes = useStyles();

  return(
    <Button variant="outlined" color="primary">
      {props.content}
    </Button>
  )
}

export default Answer;
