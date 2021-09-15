import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  button: {
    borderColor: "#FFB549",
    color: "#FFB549",
    fontWeight: 100,
    marginBottom: "8px",

    "&:hover": {
      backgroundColor: "#FFB549",
      color: "#fff",
    },
  },
}));

const Answer = (props) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="outlined"
      onClick={() => props.select(props.content, props.nextId)}
    >
      {props.content}
    </Button>
  );
};

export default Answer;
