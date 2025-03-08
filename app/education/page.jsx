import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import SchoolIcon from "@mui/icons-material/School";
import Image from "next/image";

const educationData = [
  {
    year: "2022 - 2026",
    school: "Boston University",
    logo: "/BU.png",
    degree: "Bachelor of Science in Computer Science",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "Software Engineering",
      "Web App Development",
      "Operating Systems",
      "Discrete Mathematics",
      "Combinatoric Structures",
    ],
    activities: [
      "Sigma Chi Fraternity",
      "Boston University Brazilian Association (BUBA)",
    ],
  },
  {
    year: "2020 - 2022",
    school: "Cats Academy Boston",
    logo: "/cats.png",
    degree: "High School",
    activities: [
      "DECA Club Vice President",
      "MUN Club Vice President",
      "Economics Club",
      "Student Ambassador",
    ],
  },
];

export default function Education() {
  return (
    <Container sx={{ pt: 4, pb: 8 }}>
      <Box sx={{ marginX: 4, mb: 6 }}>
        <Typography variant="h2">Education</Typography>
      </Box>
      <Timeline
        sx={{
          [`& .MuiTimelineItem-root::before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {educationData.map((edu, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  backgroundColor: "background.paper",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                {/* Header with Logo and Basic Info */}
                <Box
                  sx={{ display: "flex", gap: 3, alignItems: "center", mb: 3 }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: 80,
                      height: 80,
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      fill
                      sizes="80px"
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      color="primary"
                      sx={{ fontWeight: 600, mb: 0.5 }}
                    >
                      {edu.school}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {edu.year}
                    </Typography>
                    <Typography color="text.secondary">{edu.degree}</Typography>
                  </Box>
                </Box>

                {/* Details Section */}
                <Box sx={{ ml: 0 }}>
                  {edu.coursework && (
                    <Box sx={{ mt: 2 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 600, mb: 1 }}
                      >
                        Relevant Coursework
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {edu.coursework.join(" • ")}
                      </Typography>
                    </Box>
                  )}

                  <Box sx={{ mt: 2 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, mb: 1 }}
                    >
                      Activities
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {edu.activities.join(" • ")}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
}
