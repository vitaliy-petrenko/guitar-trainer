import React from 'react';
import { Drawer, Fab, Hidden, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Settings';
import CloseIcon from '@material-ui/icons/Close';

const SIDEBAR_WIDTH = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: SIDEBAR_WIDTH,
      flexShrink: 0,
    },
  },

  menuButton: {
    left: theme.spacing(2),
    top: theme.spacing(2),
    position: 'fixed',
    zIndex: theme.zIndex.modal + 1,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    background: '#212121',
    border: 0,
    width: SIDEBAR_WIDTH,
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(8),
    },
  },
  content: {
    flexGrow: 1,
    minWidth: 1100,
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(6),
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
        <Fab size='small' color={mobileOpen ? 'default' : 'secondary'} onClick={handleDrawerToggle} aria-label='edit'>
          {mobileOpen ? (
            <CloseIcon/>
          ) : (
            <MenuIcon/>
          )}
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
