import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Chat } from "./index";
import { List } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },

  chats: {
    height: 400,
    padding: "0",
    overflow: "auto",
  },
}));

const Chats = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.chats} id={"scroll-area"}>
      {props.chats.map((value) => {
        return (
          <Chat text={value.text} type={value.type} nextId={value.nextId} />
        );
      })}
    </List>
  );
};

export default Chats;
