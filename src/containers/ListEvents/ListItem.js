import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialListItem from "@material-ui/core/ListItem";
import * as _ from "lodash";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";

// Event Name, Description, Venue, Price and Discount

const useStyles = makeStyles((theme) => ({
  inline: {
    display: "inline",
  },
}));

const ListItem = (props) => {
  const { eventName, description } = props;

  return (
    <MaterialListItem>
      <ListItemAvatar>
        <Avatar>
          <BeachAccessIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={_.startCase(eventName)} secondary={description} />
    </MaterialListItem>
  );
};

export default memo(ListItem);
