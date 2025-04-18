"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import Image from "next/image";
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
  SiSanity,
  SiTypescript,
  SiGooglecloud,
} from "react-icons/si";

// Update the techIcons mapping to include all technologies
const techIcons = {
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  "Sanity.io": <SiSanity />,
  "React.js": <SiReact />,
  TypeScript: <SiTypescript />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  Python: <SiPython />,
  Firebase: <SiFirebase />,
  "Google OAuth": <SiGooglecloud />,
  "Material-UI": <SiMui />,
  "Beautiful Soup": <SiPython />,
  JavaScript: <SiJavascript />,
  "Node.js": <SiNodedotjs />,
  Swift: <SiSwift />,
  SwiftUI: <SiSwift />,
  Git: <SiGit />,
  Postman: <SiPostman />,
  Docker: <SiDocker />,
  TailwindCSS: <SiTailwindcss />,
  NumPy: <SiNumpy />,
  Pandas: <SiPandas />,
  Flask: <SiFlask />,
  Figma: <SiFigma />,
  Scrappy: <SiPython />, // Using Python icon for Scrappy
};

const projectsData = [
  {
    title: "Saga Website",
    type: "freelance",
    client: "Saga",
    period: "April 2025",
    description: [
      "Built and deployed the marketing website for Saga, a startup, using Next.js and Tailwind CSS.",
    ],
    technologies: ["JavaScript", "Next.js", "Material-UI"],
    link: "https://saga-website-nine.vercel.app/",
  },
  {
    title: "E-commerce Web App",
    type: "freelance",
    client: "BPM Watches",
    period: "Oct 2024 - Jan 2025",
    description: [
      "Developed and deployed a full-stack web application for a watch company.",
      "Integrated Sanity.io as a headless CMS and utilized Next JS and Tailwind CSS for the user interface.",
      "Integrated WhatsApp for customer inquiries, tailored to meet the client's requirements instead of a traditional payment system",
    ],
    technologies: [
      "JavaScript",
      "Next.js",
      "Tailwind CSS", // Updated to match techIcons key
      "Sanity.io",
      "Figma",
    ],
    link: "https://bpmwatches.com/",
  },
  {
    title: "Resume Web App",
    type: "academic",
    course: "CS391 - Web Application Development",
    period: "Fall 2023",
    description: [
      "Designed a responsive resume website optimized for both mobile and desktop devices.",
    ],
    technologies: ["React.js", "TypeScript", "HTML", "CSS"],
    github: "https://github.com/glevi2004/mp-3",
    link: "https://mp-3-two-delta.vercel.app/",
  },
  {
    title: "Avalia Prof",
    type: "personal",
    period: "In Development",
    description: [
      "Website for Brazilian students to rate their professors and share tips.",
      "Designed the front end with Figma and developed it using Next.js and Material UI.",
      "Currently building a database of Brazilian universities and professors using Python, Beautiful Soup, and Scrapy for web scraping.",
    ],
    technologies: [
      "JavaScript",
      "Python",
      "Beautiful Soup",
      "Scrappy",
      "Firebase",
      "Google OAuth",
      "Next.js",
      "Material-UI",
    ],
  },
  {
    title: "This Website",
    type: "personal",
    period: "2024",
    description: [
      "Designed in Figma and developed a responsive portfolio website",
      "Implemented using Next.js and Material-UI",
    ],
    technologies: ["Next.js", "Material-UI", "Figma"],
    github: "https://github.com/glevi2004/levi-ramos-website",
  },
];

export default function Projects() {
  const freelanceProjects = projectsData.filter(
    (project) => project.type === "freelance"
  );
  const personalProjects = projectsData.filter(
    (project) => project.type === "personal"
  );
  const academicProjects = projectsData.filter(
    (project) => project.type === "academic"
  );

  return (
    <Container maxWidth="lg" sx={{ pt: 4, pb: 8 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
          mb: 8,
          mt: 4,
          marginX: 4,
          alignItems: "center",
        }}
      >
        {/* Left side - Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="/projects.svg"
            alt="Projects"
            width={400}
            height={400}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>

        {/* Right side - Title and Text */}
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
            Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            Here's a collection of projects I've worked on across different
            contexts. From freelance work to academic projects and personal
            endeavors, each one represents a unique challenge and learning
            experience in my journey as a developer.
          </Typography>
        </Box>
      </Box>

      {/* Project Accordions */}
      <Box sx={{ mt: 4 }}>
        {/* Freelance Projects */}
        <Accordion defaultExpanded={freelanceProjects.length > 0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ backgroundColor: "background.paper" }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <WorkIcon color="primary" />
              <Typography variant="h6">Freelance Projects</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {freelanceProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </AccordionDetails>
        </Accordion>

        {/* Personal Projects */}
        <Accordion sx={{ mt: 2 }} defaultExpanded={personalProjects.length > 0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ backgroundColor: "background.paper" }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CodeIcon color="primary" />
              <Typography variant="h6">Personal Projects</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {personalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </AccordionDetails>
        </Accordion>

        {/* Academic Projects */}
        <Accordion sx={{ mt: 2 }} defaultExpanded={academicProjects.length > 0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ backgroundColor: "background.paper" }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <SchoolIcon color="primary" />
              <Typography variant="h6">Academic Projects</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {academicProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}

// Project Card Component
function ProjectCard({ project }) {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        mb: 2,
        "&:hover": {
          transform: "translateY(-2px)",
          transition: "transform 0.3s ease-in-out",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Box>
          <Typography variant="h6" color="primary" gutterBottom>
            {project.title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {project.client || project.course}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            {project.period}
          </Typography>
        </Box>
        <Box>
          {project.github && (
            <IconButton
              component={MuiLink}
              href={project.github}
              target="_blank"
              color="inherit"
            >
              <GitHubIcon />
            </IconButton>
          )}
          {project.link && (
            <IconButton
              component={MuiLink}
              href={project.link}
              target="_blank"
              color="inherit"
            >
              <LaunchIcon />
            </IconButton>
          )}
        </Box>
      </Box>

      <Box sx={{ mt: 2 }}>
        {project.description.map((item, i) => (
          <Typography
            key={i}
            variant="body2"
            sx={{ mb: 1, pl: 2, position: "relative" }}
          >
            • {item}
          </Typography>
        ))}
      </Box>

      <Box
        sx={{
          mt: 2,
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {project.technologies.map((tech) => (
          <Box
            key={tech}
            sx={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",
              "&:hover": {
                "& > .tooltip": {
                  opacity: 1,
                  visibility: "visible",
                },
              },
            }}
          >
            <Box
              sx={{
                fontSize: "1.5rem",
                color: "primary.main",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "translateY(-2px)",
                },
              }}
            >
              {techIcons[tech]}
            </Box>
            <Typography
              className="tooltip"
              sx={{
                position: "absolute",
                bottom: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "background.paper",
                color: "text.primary",
                padding: "4px 8px",
                borderRadius: 1,
                fontSize: "0.75rem",
                opacity: 0,
                visibility: "hidden",
                transition: "all 0.2s ease-in-out",
                whiteSpace: "nowrap",
                boxShadow: 1,
                mb: 0.5,
                zIndex: 1,
              }}
            >
              {tech}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
