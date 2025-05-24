import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import HeaderSection from "./components/HeaderSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Portfolio() {
  return (
    <div className="bg-black flex flex-row justify-center w-full">
      <div className="bg-black w-full max-w-[1280px] relative">
        <div>
          <section className="w-full" id="header"><HeaderSection /></section>
          <section className="w-full" id="about"><AboutSection /></section>
          <section className="w-full" id="projects"><ProjectsSection /></section>
          <section className="w-full" id="experience"><ExperienceSection /></section>
          <section className="w-full" id="contact"><ContactSection /></section>
        </div>
        <footer className="w-full h-[70px] bg-[#1a1a1a] flex items-center justify-center">
          <p className="font-['IBM_Plex_Mono-Regular',Helvetica] font-normal text-white text-sm text-center">
            Corporation Universitaria Iberoamericana - 2025
          </p>
        </footer>
      </div>
    </div>
  );
}
