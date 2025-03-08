"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const pages = [
    { name: "Home", path: "/" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Me", path: "/contact" },
  ];

  const drawer = (
    <List sx={{ pt: 4 }}>
      {pages.map((page, index) => (
        <React.Fragment key={page.name}>
          <ListItem>
            <Link
              href={page.path}
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Button
                fullWidth
                sx={{
                  color: theme.palette.text.primary,
                  textTransform: "uppercase",
                  py: 2,
                  fontSize: "1rem",
                  fontWeight: 500,
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                }}
                onClick={handleDrawerToggle}
              >
                {page.name}
              </Button>
            </Link>
          </ListItem>
          {index < pages.length - 1 && (
            <Box
              sx={{
                width: "100%",
                borderBottom: `1px solid ${theme.palette.divider}`,
              }}
            />
          )}
        </React.Fragment>
      ))}
    </List>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0} // Add this line to remove the shadow
      sx={{
        backgroundColor: theme.palette.background.paper,
        height: "10vh",
      }}
    >
      <Container
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <Button
              disableRipple
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                color: theme.palette.primary.main,
                fontSize: { xs: "1.5rem", md: "1.8rem" },
                textTransform: "none",
                padding: 0,
                minWidth: "auto",
                "&:hover": {
                  backgroundColor: "transparent",
                  transform: "scale(1.05)",
                  transition: "transform 0.2s ease-in-out",
                },
              }}
            >
              {"<Levi />"}
            </Button>
          </Link>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  color: theme.palette.primary.main,
                  padding: "12px",
                  "& .MuiSvgIcon-root": {
                    fontSize: "2rem",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                elevation={0}
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
                sx={{
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: 240,
                    backgroundColor: theme.palette.background.paper,
                    pt: 2,
                  },
                }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 3 }}>
              {pages.map((page) => (
                <Link
                  key={page.name}
                  href={page.path}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    sx={{
                      color: theme.palette.text.primary,
                      textTransform: "none",
                      fontSize: "1.1rem",
                      padding: "8px 16px",
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
