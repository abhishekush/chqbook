import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialListItem from "@material-ui/core/ListItem";
import * as _ from "lodash";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";

// Event Name, Description, Venue, Price and Discount

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const ListItem = (props) => {
  const { eventName, description, venue, price, discount } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <MaterialListItem button onClick={handleClick}>
        <>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={_.startCase(eventName)} secondary={venue} />

          {open ? <ExpandLess /> : <ExpandMore />}
        </>
      </MaterialListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <MaterialListItem className={classes.nested}>
            <ListItemText secondary={description} />
          </MaterialListItem>
        </List>
      </Collapse>
    </>
  );
};

export default memo(ListItem);
