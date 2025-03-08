"use client";
import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";

export default function Contact() {
  const contactLinks = [
    {
      name: "LinkedIn",
      icon: <LinkedInIcon sx={{ fontSize: "1.5rem" }} />,
      href: "https://www.linkedin.com/in/gabrielleviramos/",
      color: "#0077B5",
    },
    {
      name: "GitHub",
      icon: <GitHubIcon sx={{ fontSize: "1.5rem" }} />,
      href: "https://github.com/glevi2004",
      color: "#333",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon sx={{ fontSize: "1.5rem" }} />,
      href: "https://www.instagram.com/_glevi__/",
      color: "#E4405F",
    },
    {
      name: "Email",
      icon: <EmailIcon sx={{ fontSize: "1.5rem" }} />,
      href: "mailto:glevi@bu.edu",
      color: "#EA4335",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ pt: 4, pb: 8 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 8,
          mt: 4,
          marginX: 4,
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "60%" } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              background: "linear-gradient(45deg, #90caf9 30%, #f48fb1 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Let's Connect
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 4 }}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out
            through any of the following platforms.
          </Typography>

          <Stack spacing={2} sx={{ mb: 4 }}>
            {contactLinks.map((link) => (
              <Button
                key={link.name}
                variant="contained"
                startIcon={link.icon}
                href={link.href}
                target="_blank"
                sx={{
                  backgroundColor: link.color,
                  color: "#fff",
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: link.color,
                    opacity: 0.9,
                  },
                }}
                fullWidth
              >
                {link.name}
              </Button>
            ))}
          </Stack>

          <Button
            variant="outlined"
            startIcon={<DescriptionIcon />}
            href="https://drive.google.com/file/d/1kxfu1mCuYPwuqL_JS7Vc_sU9RCHS4fqq/view?usp=sharing"
            target="_blank"
            sx={{
              borderWidth: 2,
              py: 1.5,
              width: "100%",
              "&:hover": {
                borderWidth: 2,
              },
            }}
          >
            View Resume
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
