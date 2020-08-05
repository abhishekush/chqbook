import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { validationSchema, initialValues } from "./constants";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 420,
    marginTop: 50,
    // [theme.breakpoints.up("md")]: {
    //   marginRight: "10ch",
    // },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80ch",
      marginBottom: 20,
    },
    // [theme.breakpoints.down("xs")]: {

    // },
  },
  actions: {
    float: "right",
  },
}));

const AddEventForm = (props) => {
  const classes = useStyles();
  const { onSubmit } = props;
  const {
    handleChange,
    setFieldTouched,
    touched,
    errors,
    values,
    handleSubmit,
    handleReset,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  return (
    <form>
      <Card className={classes.card}>
        <CardContent>
          <TextField
            name="eventName"
            id="eventName"
            label="Event Name"
            margin="dense"
            variant="outlined"
            fullWidth
            helperText={touched.eventName ? errors.eventName : ""}
            error={touched.eventName && Boolean(errors.eventName)}
            onChange={change.bind(null, "eventName")}
            value={values.eventName}
          />
          <TextField
            name="description"
            id="description"
            label="Description"
            margin="dense"
            variant="outlined"
            fullWidth
            helperText={touched.description ? errors.description : ""}
            error={touched.description && Boolean(errors.description)}
            onChange={change.bind(null, "description")}
            value={values.description}
          />
          <TextField
            name="venue"
            id="venue"
            label="Venue"
            margin="dense"
            variant="outlined"
            fullWidth
            helperText={touched.venue ? errors.venue : ""}
            error={touched.venue && Boolean(errors.venue)}
            onChange={change.bind(null, "venue")}
            value={values.venue}
          />
          <TextField
            name="price"
            id="price"
            label="Price"
            margin="dense"
            variant="outlined"
            fullWidth
            helperText={touched.price ? errors.price : ""}
            error={touched.price && Boolean(errors.price)}
            onChange={change.bind(null, "price")}
            value={values.price}
          />

          <TextField
            name="discount"
            id="discount"
            label="Discount"
            margin="dense"
            variant="outlined"
            fullWidth
            helperText={touched.discount ? errors.discount : ""}
            error={touched.discount && Boolean(errors.discount)}
            onChange={change.bind(null, "discount")}
            value={values.discount}
          />
        </CardContent>
        <CardActions className={classes.actions}>
          <Button color="primary" onClick={handleSubmit}>
            SUBMIT
          </Button>
          <Button onClick={handleReset} color="secondary">
            CLEAR
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default AddEventForm;
