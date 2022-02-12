// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { SidebarData } from "./sidebarItems";
// import { toggleSidebar } from "../../redux/sidebarRedux";

// const Container = styled.div`
//   background-color: #b39595; 
//   width: ${(props) => (props.sidebar ? "250px" : "0px")};
// `;

// const Wrapper = styled.div`
//   height: 100vh;
 
//   width: ${(props) => (props.sidebar ? "100%" : "0%")};
//   background-color: #b39595;
//   display: flex;
//   flex-direction: column;
//   transition: 350ms;
// `;

// const Button = styled.button`
//   background-color: #b39595;
// `;
// const SidebarList = styled.div`
//   display: flex;
//   border: 1px solid blue;
//   flex-direction: column;
// `;
// const SidebarItem = styled.li`
//   padding: 10px 0px;
//   margin: 10px 0px;
//   border: 1px solid black;
//   background-color: #b39595;
//   list-style: none;
//   width: 80%;
//   justify-content: flex-start;
//   align-items: center;
//   display: ${(props) => (props.sidebar ? "flex" : "none")};
//   flex-direction: column;
//   transition: 550ms;
// `;

// const SidebarItemDropDown = styled.div`
//   padding: 5px 0px;
//   margin: 5px 0px;
//   border: 1px solid black;
//   background-color: #b39595;
//   list-style: none;
//   width: 100%;
//   justify-content: flex-start;
//   align-items: center;
//   display: ${(props) => (props.toggleDropdown ? "flex" : "none")};
//   transition: 550ms;
// `;

// const Sidebar = () => {
// //   const [toggleSidebar, setToggleSidebar] = useState(false);
//   const [toggleDropdown, setToggleDropdown] = useState(false);
//   const sidebar = useSelector((state) => state.sidebar);
//   const dispatch = useDispatch();

// //   useEffect(() => {
// //     const toggleSidebar = () => {
// //       setToggleSidebar(!toggleSidebar);
// //     };
// //   }, [sidebar.isOpen]);

//   useEffect(() => {
//     const toggleDropdown = () => {
//       setToggleDropdown(!toggleDropdown);
//     };
//   }, [toggleDropdown]);

//   const handleClick = (e) => {

//     e.preventDefault();
    
//     dispatch(toggleSidebar())
//   }
// console.log("Sidebar status: "+sidebar.isOpen);
//   return (
//     <Container sidebar={sidebar.isOpen}>
//       {sidebar.isOpen ? (
//         <Button onClick={handleClick}>X</Button>
//       ) : (
//         <Button onClick={handleClick}>=</Button>
//       )}
//       <Wrapper sidebar={sidebar.isOpen}>
//         <SidebarList>
//           {SidebarData.map((item, index) => {
//             return item.subNav ? (
//               <SidebarItem
//                 key={index}
//                 sidebar={sidebar.isOpen}
//                 toggleDropdown={toggleDropdown}
//                 onClick={() => setToggleDropdown(!toggleDropdown)}
//               >
//                 {item.title}
//                 {item.subNav.map((subItem, index) => {
//                   return (
//                     <Link to={subItem.path}>
//                       <SidebarItemDropDown
//                         key={index}
//                         sidebar={sidebar.isOpen}
//                         toggleDropdown={toggleDropdown}
//                         onClick={handleClick}
//                       >
//                         {subItem.title}
//                       </SidebarItemDropDown>
//                     </Link>
//                   );
//                 })}
//               </SidebarItem>
//             ) : (
//               <Link to={item.path}>
//                 <SidebarItem
//                   key={index}
//                   sidebar={sidebar.isOpen}
//                   onClick={handleClick}
//                 >
//                   {item.title}
//                 </SidebarItem>
//               </Link>
//             );
//           })}
//         </SidebarList>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Sidebar;


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
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

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
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
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
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Main>
    </Box>
  );
}

