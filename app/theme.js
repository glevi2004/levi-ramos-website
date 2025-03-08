"use client";
// theme.js (or theme.ts)
import { createTheme } from "@mui/material/styles";
import { JetBrains_Mono } from "next/font/google";

// Import JetBrains Mono from Google Fonts
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"], // Customize weights
  variable: "--font-jetbrains-mono", // CSS variable for global styling (optional)
});

// Define the custom theme
const theme = createTheme({
  typography: {
    fontFamily: `${jetBrainsMono.style.fontFamily}, monospace`,
    h1: { fontSize: "2rem", fontWeight: 700 },
    h2: { fontSize: "1.75rem", fontWeight: 600 },
    body1: { fontSize: "1rem", fontWeight: 400 },
  },
  palette: {
    mode: "dark", // Optional: Use dark mode
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#121212", // Dark background
      paper: "#1e1e1e", // Card background
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
    },
  },
});

export default theme;
