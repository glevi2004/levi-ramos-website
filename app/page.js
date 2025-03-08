"use client";
import { Container, Typography, Button, Box } from "@mui/material";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
    </>
  );
}
