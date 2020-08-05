import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "./ListItem";
import Divider from "@material-ui/core/Divider";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

export const filterType = Object.freeze({
  ALL: "ALL",
  NO_DISCOUNT: "NO_DISCOUNT",
  DISCOUNT: "DISCOUNT",
  FREE: "FREE",
});

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  root: {
    width: "100%",
    maxWidth: "80ch",
    backgroundColor: theme.palette.background.paper,
    maxHeight: 520,
    overflowY: "auto",
  },
  inline: {
    display: "inline",
  },
}));

export default function AlignItemsList(props) {
  const { filter, handleFilter, list } = props;

  const classes = useStyles();

  return (
    <>
      <ToggleButtonGroup
        value={filter}
        onChange={handleFilter}
        aria-label="text formatting"
        exclusive
      >
        <ToggleButton value={filterType.ALL} aria-label="bold">
          ALL
        </ToggleButton>
        <ToggleButton value={filterType.FREE} aria-label="underlined">
          FREE
        </ToggleButton>
        <ToggleButton value={filterType.DISCOUNT} aria-label="italic">
          DISCOUNT
        </ToggleButton>
        <ToggleButton value={filterType.NO_DISCOUNT} aria-label="underlined">
          NO DISCOUNT
        </ToggleButton>
      </ToggleButtonGroup>
      <div className={classes.container}>
        <List className={classes.root}>
          {list.map((d, index) => (
            <React.Fragment key={d.eventName + index}>
              <ListItem {...d} />
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </div>
    </>
  );
}
