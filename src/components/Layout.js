import React from 'react';
import { Drawer, Fab, Hidden, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Settings';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  menuButton: {
    top: theme.spacing(3),
    left: theme.spacing(3),
    position: 'fixed',
    zIndex: 10,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    background: '#212121',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    minWidth: 1200,
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(6),
      paddingTop: theme.spacing(4),
    },
  },
}));

export default ({ Sidebar, Main }) => {
  const
    classes = useStyles(),
    [mobileOpen, setMobileOpen] = React.useState(false),
    handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    },
    drawer = (
      <Sidebar/>
    );

  return (
    <div className={classes.root}>

      <div className={classes.menuButton}>
        <Fab size='small' position='fixed' color='secondary' onClick={handleDrawerToggle} aria-label='edit'>
          <MenuIcon/>
        </Fab>
      </div>

      <nav className={classes.drawer}>
        <Hidden mdUp implementation='css'>
          <Drawer
            variant='temporary'
            anchor='left'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <Main/>
      </main>
    </div>
  );
};
