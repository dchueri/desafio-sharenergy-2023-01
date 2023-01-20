import { Logout } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";

const pages = [
  { name: "Usuários", route: "/" },
  { name: "HTTP Gatos", route: "/random-cats" },
  { name: "Cachorro Imgs", route: "/random-dogs" },
  { name: "Clientes", route: "/clients" },
];

export const NavBar = () => {
  const auth = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    auth.logout();
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        color: "black",
        boxShadow: "none",
        height: "10vh",
        width: "100%",
        maxWidth: "70vw",
        display: "flex",
        justifyContent: "center",
        justifySelf: "center",
        margin: "0 auto",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            className="max-w-min"
          >
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
                color: "black",
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => navigate(page.route)}>
                  <Typography
                    textAlign="center"
                    sx={{
                      color: "#161C2D",
                      fontWeight: "bold",
                      "&:hover": {
                        color: "#00A2A2",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <img src="/logo.png" className="w-[15%] mx-auto" />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: "2em",
              padding: "0 2em",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => navigate(page.route)}
                sx={{
                  my: 2,
                  display: "block",
                  color: "#161C2D",
                  fontWeight: "bold",
                  textTransform: "initial",
                  fontSize: "16px",
                  "&:hover": {
                    color: "#00A2A2",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              width: "50px",
              height: "30px",
              borderLeft: "solid",
              borderLeftWidth: "1px",
              borderColor: "rgba(122, 122, 122, 0.5)",
              display: "flex",
              justifyContent: "center",
              verticalAlign: "center",
              paddingLeft: "2em",
              alignItems: "center",
            }}
          >
            <Logout
              sx={{
                "&:hover": {
                  color: "#00A2A2",
                  cursor: "pointer",
                },
              }}
              onClick={handleLogout}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
