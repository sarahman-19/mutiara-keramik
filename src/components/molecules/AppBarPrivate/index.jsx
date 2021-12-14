// module
import * as React from "react";
import { AppBar, Button, Box, Toolbar, IconButton, Typography, Badge, MenuItem, Menu } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import {connect} from 'react-redux';

// local module
import {LogoutAccount} from '../../../config/Redux/Action';

const pages = ["produk", "kategori", "inspirasi"];

function AppBarPrivate(props) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={() => props.LogoutAccount()}>Logout</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              cursor: "pointer",
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
            onClick={() => navigate("/")}
          >
            MUTIARA KERAMIK
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => {
              if (page === "produk") {
                return (
                  <Button
                    key={page}
                    onClick={() => navigate(`/${page}`)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                );
              }

              if (page === "kategori") {
                return (
                  <Button
                    key={page}
                    onClick={() => navigate(`/${page}`)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                );
              }

              if (page === "inspirasi") {
                return (
                  <Button
                    key={page}
                    onClick={() => navigate(`/${page}`)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                );
              }

              return 0;
            })}
          </Box>

          {/* mobile menu */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => {
                if (page === "produk") {
                  return (
                    <MenuItem key={page} onClick={() => navigate(`/${page}`)}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  );
                }
                if (page === "kategori") {
                  return (
                    <MenuItem key={page} onClick={() => navigate(`/${page}`)}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  );
                }
                if (page === "inspirasi") {
                  return (
                    <MenuItem key={page} onClick={() => navigate(`/${page}`)}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  );
                }

                return 0;
              })}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex" }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}

const reduxState = (state) => ({
  LoginStatus: state.isLogin
})

const reduxAction = (dispatch) => ({
  LogoutAccount: () => dispatch(LogoutAccount())
})

export default connect(reduxState, reduxAction)(AppBarPrivate);