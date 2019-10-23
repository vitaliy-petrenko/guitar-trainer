import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import Heading from './Heading';

const
  useStyles = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
  }));

export interface IProps {
  title: string,
}

const SidebarItem: React.FC<IProps> = ({ title, children }) => {
  const classes = useStyles();

  return (
    <div className="sidebar__item">
      <Paper className={classes.paper}>
        <Heading>
          {title}
        </Heading>
        {children}
      </Paper>
    </div>
  );
};

export default SidebarItem;
