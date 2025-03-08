"use client";
import { Container, Typography, Button, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function HeroSection() {
  return (
    <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
      {/* Adjusted padding */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          width: "100%", // Ensure box takes full width
        }}
      >
        <Box
          sx={{
            maxWidth: "800px",
            width: "100%", // Ensure inner box takes full width
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            marginLeft: { xs: 0, md: 0 }, // Remove left margin on mobile
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 400,
              mb: 2,
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            Hi, my name is
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            Gabriel Levi Ramos
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              mb: 4,
              lineHeight: 1.8,
            }}
          >
            I'm a Junior at Boston University passionate about coding —whether
            it's building Web, iOS apps, or just turning cool ideas into
            real-life projects. Stick around to see what I'm up to!
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: { xs: 1, sm: 2 }, // Reduce gap on mobile
              justifyContent: "flex-start",
              flexWrap: "wrap", // Allow buttons to wrap on small screens
              width: "100%", // Ensure full width
              mb: 4,
            }}
          >
            <Button
              variant="contained"
              startIcon={
                <LinkedInIcon
                  sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" } }}
                />
              }
              href="https://www.linkedin.com/in/gabrielleviramos/"
              target="_blank"
              sx={{
                textTransform: "none",
                fontSize: { xs: "0.875rem", sm: "1rem" }, // Smaller font on mobile
                py: 1,
                px: { xs: 1.5, sm: 2 }, // Reduced padding on mobile
              }}
            >
              LinkedIn
            </Button>
            <Button
              variant="contained"
              startIcon={<GitHubIcon sx={{ fontSize: "1.3rem" }} />}
              href="https://github.com/glevi2004"
              target="_blank"
              sx={{
                textTransform: "none",
                fontSize: "1rem",
                py: 1,
                px: 2,
              }}
            >
              GitHub
            </Button>
            <Button
              variant="contained"
              startIcon={<InstagramIcon sx={{ fontSize: "1.3rem" }} />}
              href="https://www.instagram.com/_glevi__/"
              target="_blank"
              sx={{
                textTransform: "none",
                fontSize: "1rem",
                py: 1,
                px: 2,
              }}
            >
              Instagram
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
