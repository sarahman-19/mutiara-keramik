import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {useNavigate} from 'react-router-dom';

const pages = ["Products", "Pricing", "Blog"];

const AppBarLogin = () => {
  const navigate = useNavigate()

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            MUTIARA KERAMIK
          </Typography>

          {/* hamburger menu mobile */}

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
                if (page === "Products") {
                  return (
                    <MenuItem key={page} onClick={() => console.log(page)}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  );
                }
                if (page === "Pricing") {
                  return (
                    <MenuItem key={page} onClick={() => console.log(page)}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  );
                }
                if (page === "Blog") {
                  return (
                    <MenuItem key={page} onClick={() => console.log(page)}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  );
                }

                return 0;
              })}
            </Menu>
          </Box>

          {/* navbar for dekstop */}

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            MUTIARA KERAMIK
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>

            {pages.map((page) => {
              if (page === "Products") {
                return (
                  <Button
                    key={page}
                    onClick={() => console.log(page)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                );
              }

              if (page === "Pricing") {
                return (
                  <Button
                    key={page}
                    onClick={() => console.log(page)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                );
              }

              if (page === "Blog") {
                return (
                  <Button
                    key={page}
                    onClick={() => console.log(page)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                );
              }

              return 0;
            })}
          </Box>

          {/* button login */}

          <Box sx={{ flexGrow: 0 }}>
            <Button onClick={() => navigate('/login')} color="inherit">Login</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarLogin;
