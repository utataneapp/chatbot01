import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "440px",
    },
  },
}));

export default function TextInput(props) {
  const classes = useStyles();
  const { label, value, multiline, maxRows, onChange } = props;

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        margin={"dense"}
        label={label}
        value={value}
        multiline={multiline}
        maxRows={maxRows}
        onChange={onChange}
      />
    </form>
  );
}
