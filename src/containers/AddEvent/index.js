import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Form from "./form";

// Event Name, Description, Venue, Price and Discount
const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
}));

const AddEvent = (props) => {
  const classes = useStyles();
  const { onSubmit } = props;

  return (
    <div className={classes.container}>
      <Form onSubmit={onSubmit} />
    </div>
  );
};

export default AddEvent;
