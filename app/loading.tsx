import { Box, CircularProgress, Container, Typography } from "@mui/material";

export default function ProjectsLoading() {
  return (
    <Container
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <CircularProgress size={60} thickness={4} />
    </Container>
  );
}
