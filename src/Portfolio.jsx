import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import HeaderSection from "./components/HeaderSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Portfolio() {
  return (
    <div className="bg-black flex flex-row justify-center w-full relative">
      <img
        src="/ibero.png"
        alt="Ibero Logo"
        className="hidden md:block fixed left-10 top-1/2 -translate-y-1/2 h-[300px] w-auto z-10"
        style={{ objectFit: "contain" }}
      />
      <img
        src="/ibero.png"
        alt="Ibero Logo"
        className="hidden md:block fixed right-10 top-1/2 -translate-y-1/2 h-[300px] w-auto z-10"
        style={{ objectFit: "contain" }}
      />
      <div className="bg-black w-full max-w-[1280px] relative z-20">
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
