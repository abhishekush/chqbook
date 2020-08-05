import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AddEvent from "../AddEvent";
import ListEvents, { filterType } from "../ListEvents";
import {
  getEvents,
  getEventsSelector,
  saveEvent,
} from "../../actions/eventActions";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const Events = () => {
  const dispatch = useDispatch();

  const eventsList = useSelector(getEventsSelector);

  const [filter, setFilter] = React.useState(filterType.ALL);

  const handleFilter = (event, newFormats) => {
    setFilter(newFormats);
  };

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  const onAddEvent = useCallback(
    (eventObject) => {
      dispatch(saveEvent(eventObject));
    },
    [dispatch]
  );

  const classes = useStyles();

  const listData = useMemo(() => {
    switch (filter) {
      case filterType.FREE:
        return eventsList.filter((obj) => obj.discount === obj.price);
      case filterType.NO_DISCOUNT:
        return eventsList.filter((obj) => obj.discount === 0);
      case filterType.DISCOUNT:
        return eventsList.filter((obj) => obj.discount > 0);
      default:
        return eventsList;
    }
  }, [filter, eventsList]);

  return (
    <>
      <CssBaseline />
      <Container className={classes.container} maxWidth="lg">
        <Grid container>
          <Grid style={{ height: "100%" }} item md={6} lg={6} sm={12} xs={12}>
            <AddEvent onSubmit={onAddEvent} />
          </Grid>
          <Grid
            style={{ height: "100%", maxHeight: 200 }}
            item
            md={6}
            lg={6}
            sm={12}
            xs={12}
          >
            <ListEvents
              filter={filter}
              handleFilter={handleFilter}
              list={listData}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Events;
