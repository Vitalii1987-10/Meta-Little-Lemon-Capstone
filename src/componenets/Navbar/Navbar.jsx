import * as React from "react";
import * as MUI from "../../MUI";
import logo from "../../assets/Asset 16@4x.png";
import "./Navbar.css";

const pages = [
  "Home",
  "About",
  "Menu",
  "Reservations",
  "Order Online",
  "Login",
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <MUI.AppBar position="static" color="inherit" elevation={0}>
      <MUI.Container className="container" maxWidth="xl">
        <MUI.Toolbar disableGutters>
          <MUI.Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img className="logoImg" src={logo} alt="Little Lemon" />
          </MUI.Typography>

          <MUI.Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <MUI.IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MUI.MenuIcon />
            </MUI.IconButton>
            <MUI.Menu
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
              {pages.map((page) => (
                <MUI.MenuItem key={page} onClick={handleCloseNavMenu}>
                  <MUI.Typography>{page}</MUI.Typography>
                </MUI.MenuItem>
              ))}
            </MUI.Menu>
          </MUI.Box>
          <MUI.Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            justifyContent="center"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img className="logoImg" src={logo} alt="Little Lemon" />
          </MUI.Typography>
          <MUI.Box
            justifyContent="right"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <MUI.Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  gap: 2,
                  my: 2,
                  color: "#333333",
                  display: "inline-block",
                  fontSize: 16,
                  pt: 1,
                }}
              >
                <MUI.Typography noWrap>{page}</MUI.Typography>
              </MUI.Button>
            ))}
          </MUI.Box>
        </MUI.Toolbar>
      </MUI.Container>
    </MUI.AppBar>
  );
}
export default ResponsiveAppBar;
