import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
/* import ThemeContext from '../contexts/ContextProvider'; */
import Icon from '@mui/material/Icon';
import { Avatar, Backdrop, CircularProgress, LinearProgress, ListItemAvatar } from '@mui/material';

const drawerWidth = 180;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const navigate = useNavigate();
  /* const location = useLocation(); */
  /* const { user, setUser } = React.useContext(ThemeContext); */
  const user = {}
  const ROUTES_PARENT = (user?.permisos || []).filter((route) => route.isParent);
  const [loading, setLoading] = React.useState(false);


  const theme = useTheme();
  const [drawer, setDrawer] = React.useState({
    isMobile: window.innerWidth <= 600 ? true : false,
    openDesk: window.innerWidth > 600 ? true : false,
    openMobile: false,
  });

  const handleDrawerOpenDesk = () => {
    setDrawer({ ...drawer, openDesk: true });
  };

  const handleDrawerCloseDesk = () => {
    setDrawer({ ...drawer, openDesk: false });
  };

  const handleDrawerOpenMobile = () => {
    setDrawer({ ...drawer, openMobile: true });
  };

  const handleDrawerCloseMobile = () => {
    setDrawer({ ...drawer, openMobile: false });
  };

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    const changeMedia = (e) => {
      if (e.matches) {
        setDrawer({ ...drawer, isMobile: true, openDesk: false });
      } else {
        setDrawer({ ...drawer, isMobile: false, openDesk: true });
      }
    };
    mediaQuery.addEventListener('change', changeMedia);
    return () => {
      mediaQuery.removeEventListener('change', changeMedia);
    };
  }, [drawer]);


  const listDrawer = (
    <List>
      {ROUTES_PARENT.map((item) => (
        <ListItem
          button
          key={item._id}
          style={({ isActive }) => (isActive ? { background: "rgba(255, 255, 255, 0.2)" } : { background: "transparent" })}
          component={NavLink} to={item.router}>
          <ListItemText sx={{ color: 'white' }} primary={(
            <>
              <ListItemAvatar>
                <Avatar variant="rounded" sx={{ width: 24, height: 24, background: 'transparent', margin: 'auto' }}>
                  <Icon>{item.icon}</Icon>
                </Avatar>
              </ListItemAvatar>
              <Typography align='center' sx={{
                width: '100%',
                margin: 0,
                fontWeight: '700',
                lineHeight: 'unset',
                fontSize: '.8rem',
              }} noWrap variant="button" gutterBottom component="div">
                {item.name}
              </Typography>
            </>
          )} />
        </ListItem>
      ))}
    </List>
  );

  if (loading) {
    return (
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <Box sx={{ width: '50%' }}>
          <Typography align='center' color="primary" sx={{ fontWeight: '700' }} variant="button" gutterBottom component="div">
            HTTPS://SMARTPERU.COM
          </Typography>
          <LinearProgress color="primary" />
        </Box>
      </Backdrop>
    )
  }


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar sx={{ bgcolor: user?._idHotel?.background }} position="fixed" open={drawer.openDesk}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpenDesk}
            edge="start"
            sx={{ mr: 2, ...((drawer.openDesk || drawer.isMobile) && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpenMobile}
            edge="start"
            sx={{ mr: 2, ...((drawer.openMobile || !drawer.isMobile) && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: user?._idHotel?.background,
          },
        }}
        variant="persistent"
        anchor="left"
        open={drawer.openDesk}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerCloseDesk}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon sx={{ color: 'white' }} />
            ) : <ChevronRightIcon sx={{ color: 'white' }} />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {listDrawer}
        </List>
      </Drawer>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: user?._idHotel?.background,
          },
        }}
        anchor="left"
        open={drawer.openMobile}
        onClick={handleDrawerCloseMobile}
      >
        <Toolbar />
        <Divider />
        <List>
          {listDrawer}
        </List>
      </Drawer>
      <Main sx={{ padding: 2, width: '100%' }} open={drawer.openDesk}>
        <DrawerHeader />
        <Outlet></Outlet>
      </Main>
    </Box>
  );
}