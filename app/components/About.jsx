"use client";
import { Box, Typography, Tooltip, Container, Paper } from "@mui/material";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFirebase,
  SiSwift,
  SiTailwindcss,
  SiMui,
  SiPython,
  SiNumpy,
  SiPandas,
  SiFlask,
  SiDocker,
  SiGit,
  SiPostman,
  SiFigma,
  SiTypescript,
} from "react-icons/si";

export default function About() {
  const techStacks = {
    "Web Development & Mobile Development": [
      { icon: <SiHtml5 />, name: "HTML5" },
      { icon: <SiCss3 />, name: "CSS3" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiReact />, name: "React.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiMui />, name: "Material UI" },
      { icon: <SiReact />, name: "React Native" },
      { icon: <SiSwift />, name: "Swift" },
      { icon: <SiSwift />, name: "SwiftUI" },
      { icon: <SiFirebase />, name: "Firebase" },
    ],
    "Data Science": [
      { icon: <SiPython />, name: "Python" },
      { icon: <SiNumpy />, name: "NumPy" },
      { icon: <SiPandas />, name: "Pandas" },
      { icon: <SiFlask />, name: "Flask" },
      { icon: <SiPython />, name: "Beautiful Soup" },
      { icon: <SiPython />, name: "Scrappy" },
    ],
    "Developer Tools": [
      { icon: <SiDocker />, name: "Docker" },
      { icon: <SiGit />, name: "Git" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <SiFigma />, name: "Figma" },
    ],
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        py: 8,
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 4,
            fontWeight: 700,
            background: "linear-gradient(45deg, #90caf9 30%, #f48fb1 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About Me
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            mb: 10,
            maxWidth: "800px",
            mx: "auto",
            color: "text.secondary",
            lineHeight: 1.8,
          }}
        >
          My journey in tech has equipped me with a diverse skill set spanning
          web development, mobile development, and data science. Here's my
          technical toolkit:
        </Typography>

        <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
          {Object.entries(techStacks).map(([category, technologies]) => (
            <Paper
              key={category}
              elevation={0}
              sx={{
                mb: 6,
                p: 4,
                backgroundColor: "background.paper",
                borderRadius: 2,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  color: "primary.main",
                  borderBottom: "2px solid",
                  borderColor: "primary.main",
                  pb: 1,
                  display: "inline-block",
                }}
              >
                {category}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 4,
                  justifyContent: "flex-start",
                  mt: 3,
                }}
              >
                {technologies.map((tech) => (
                  <Tooltip
                    key={tech.name}
                    title={tech.name}
                    arrow
                    placement="top"
                  >
                    <Box
                      sx={{
                        fontSize: "2.2rem",
                        color: "text.secondary",
                        transition: "all 0.2s ease-in-out",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 1,
                        "&:hover": {
                          color: "primary.main",
                          transform: "translateY(-5px)",
                        },
                      }}
                    >
                      {tech.icon}
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: "0.75rem",
                          opacity: 0.8,
                        }}
                      >
                        {tech.name}
                      </Typography>
                    </Box>
                  </Tooltip>
                ))}
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
