// import module
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

const pages = ["produk", "kategori", "inspirasi"];

const AppBarLogin = (props) => {
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
            onClick={() => navigate('/')}
            variant="h6"
            noWrap
            component="div"
            sx={{cursor: 'pointer', mr: 2, display: { xs: "none", md: "flex" } }}
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

          {/* navbar for dekstop */}

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ cursor: 'pointer', flexGrow: 1, display: { xs: "flex", md: "none" } }}
            onClick={() => navigate('/')}
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

          {/* button login */}

          <Box sx={{ flexGrow: 0 }}>
            <Button onClick={() => navigate(`${props.link}`)} color="inherit">{props.title}</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarLogin;
