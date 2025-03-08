"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Paper,
} from "@mui/material";
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
} from "react-icons/si";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import Image from "next/image";

const techIcons = {
  JavaScript: <SiJavascript />,
  "Node.js": <SiNodedotjs />,
  Python: <SiPython />,
  "React.js": <SiReact />,
  "Next.js": <SiNextdotjs />,
  HTML5: <SiHtml5 />,
  CSS3: <SiCss3 />,
  "Material UI": <SiMui />,
  Firebase: <SiFirebase />,
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
};

const experienceData = {
  techJobs: [
    {
      title: "Software Engineering Intern (WebApp, iOS)",
      company: "Esurgi Inc",
      logo: "/esurgi.png",
      period: "June 2025 - Present",
      location: "Remote",
      description: [
        "Collaborated with the development team to design, build, and maintain an iOS and Web application.",
        "Developed automations with Azure, Microsoft Graph API, SiteGround, and GitHub Actions, for deployment and CI/CD processes",
        "Programmed and deployed features for the iOS / Web apps with React JS, Material UI, Swift, SwiftUI, and Firebase.",
      ],
      technologies: [
        "JavaScript",
        "Node.js",
        "Python",
        "React.js",
        "Next.js",
        "HTML5",
        "CSS3",
        "Material UI",
        "Firebase",
        "Swift",
        "SwiftUI",
        "Git",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Ernst & Young",
      logo: "/ey.svg",
      period: "May 2022 - August 2022",
      location: "São Paulo, Brazil",
      description: [
        "Worked on customer identity and payment validation features with JavaScript, and tested RESTful APIs using Postman.",
        "Programmed, documented, and refactored code for contact information filters handling JSON data with ElasticSearch.",
        "Automated financial processes with Python and libraries such as NumPy, pandas, openpyxl, requests, processing data into Excel files for financial reporting and analysis, and deployed solutions with Docker.",
      ],
      technologies: ["JavaScript", "Python", "Postman", "Docker"],
    },
  ],
  nonTechJobs: [
    {
      title: "Consultant Intern ",
      company: "IXL Center",
      logo: "/ixl.webp",
      period: "October 2023 - November 2023",
      location: "Boston, MA",
      description: [
        "Spearheaded digital growth initiatives at a minority-owned business, guided by expert consultants.",
        "Reached over $3,000 in funding and contributed to a 2x expansion in scale.",
        "Earned the 'Best Technology' award by developing and implementing a multilingual digital literacy course (English, Spanish, Portuguese).",
      ],
    },
    {
      title: "Intern",
      company: "Adel Bark Jr. Plastic Surgery Clinic",
      period: "June 2020 - August 2020",
      location: "Curitiba, Brazil",
      description: [
        "Provided customer service, scheduled consultations, and observed surgeries to understand medical procedures.",
        "Gained insights into plastic surgery pricing and market dynamics by participating in negotiation meetings.",
      ],
    },
  ],
};

export default function Experience() {
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
            src="/experiences.svg"
            alt="Developer"
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
            Work Experience
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            Through my professional journey, I've had the opportunity to work on
            diverse projects that have enhanced my technical skills and
            problem-solving abilities. Each role has contributed to my growth as
            a software engineer.
          </Typography>
        </Box>
      </Box>

      {/* Experience Accordions */}
      <Box sx={{ mt: 4 }}>
        {/* Tech Jobs */}
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ backgroundColor: "background.paper" }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CodeIcon color="primary" />
              <Typography variant="h6">Technical Experience</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {experienceData.techJobs.map((job, index) => (
              <Paper
                key={index}
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
                <Box sx={{ display: "flex", gap: 3, alignItems: "flex-start" }}>
                  {job.logo && (
                    <Box
                      sx={{
                        position: "relative",
                        width: 100, // Increased from 60
                        height: 100, // Increased from 60
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src={job.logo}
                        alt={`${job.company} logo`}
                        fill
                        sizes="100px"
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  )}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {job.title}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      {job.company}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {job.period} | {job.location}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {job.description.map((item, i) => (
                      <Typography
                        key={i}
                        variant="body2"
                        sx={{ mb: 1, pl: 2, position: "relative" }}
                      >
                        • {item}
                      </Typography>
                    ))}
                  </Box>
                  {job.technologies && (
                    <Box
                      sx={{
                        mt: 2,
                        display: "flex",
                        gap: 2,
                        flexWrap: "wrap",
                      }}
                    >
                      {job.technologies.map((tech) => (
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
                            }}
                          >
                            {tech}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>
              </Paper>
            ))}
          </AccordionDetails>
        </Accordion>

        {/* Non-Tech Jobs */}
        <Accordion sx={{ mt: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ backgroundColor: "background.paper" }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <WorkIcon color="primary" />
              <Typography variant="h6">Other Experience</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {experienceData.nonTechJobs.map((job, index) => (
              <Paper
                key={index}
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
                <Box sx={{ display: "flex", gap: 3, alignItems: "flex-start" }}>
                  {job.logo && (
                    <Box
                      sx={{
                        position: "relative",
                        width: 100, // Increased from 60
                        height: 100, // Increased from 60
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src={job.logo}
                        alt={`${job.company} logo`}
                        fill
                        sizes="100px"
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  )}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {job.title}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      {job.company}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {job.period} | {job.location}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {job.description.map((item, i) => (
                      <Typography
                        key={i}
                        variant="body2"
                        sx={{ mb: 1, pl: 2, position: "relative" }}
                      >
                        • {item}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Paper>
            ))}
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
