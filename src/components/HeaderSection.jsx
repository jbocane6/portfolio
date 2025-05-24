import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { ChevronRight } from "lucide-react";
import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

export const HeaderSection = () => {
  // Navigation menu items
  const navItems = [
  { label: "Inicio", href: "#header" },
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Experiencia", href: "#experience" },
  { label: "Contacto", href: "#contact" },
];

   const handleScrollToExperience = () => {
    const section = document.getElementById("experience");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative w-full bg-[#080808] py-12 px-4 md:px-0">
      <div className="container mx-auto flex flex-col items-center">
        {/* Navigation */}
        <NavigationMenu className="mb-16 bg-[#1B1B1B] rounded-lg md:h-[50px] md:w-[1110px]">
          <NavigationMenuList className="flex gap-[70px] justify-center h-full items-center">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className="font-mono text-sm text-[#9c9c9c] tracking-[0.14px] hover:text-white transition-colors"
                  href={item.href}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <div className="flex items-center gap-4 pr-6">
              <a href="https://www.linkedin.com/in/juan-camilo-bocanegra-osorio/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-[18px] h-[17px] text-white" />
              </a>
              <a href="https://www.github.com/jbocane6" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-[23px] h-[19px] text-white" />
              </a>
              <a href="https://x.com/Juanoso07555284" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="w-[18px] h-3.5 text-white" />
              </a>
            </div>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Main content */}
        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          <div className="flex flex-col w-full md:w-[538px] gap-[30px] items-center md:items-start text-center md:text-left">
            <div className="flex flex-col gap-2.5">
              <div className="flex flex-col gap-2.5 py-2.5">
                <h1 className="font-['Raleway-ExtraBold',Helvetica] font-extrabold text-white text-[44px]">
                  JUAN BOCANEGRA
                  <br />
                  <span className="text-4xl">Líder técnico</span>
                </h1>
              </div>

              <p className="font-mono text-sm text-[#9c9c9c] tracking-[0.14px] leading-6 max-w-[450px] mx-auto md:mx-0">
                Técnico y tecnólogo de software, líder técnico en entornos de
                software. Me apasiona aprender y enseñar programación, aprender
                nuevas maneras de resolver problemas y crecer como
                desarrollador, compañero, líder y persona.
              </p>
            </div>

            <Button className="w-[40%] px-16 py-[10.5px] h-auto bg-[#3e8e00] hover:bg-[#4da500] rounded border border-solid border-[#61b91b] shadow-[0px_8px_30px_#3f8e0080] font-mono font-bold mx-auto md:mx-0 text-white flex items-center justify-center" onClick={handleScrollToExperience}>
              Portafolio
              <ChevronRight className="ml-2 h-2.5 w-[5.89px]" />
            </Button>
          </div>

          <div className="mt-8 md:mt-0 flex justify-center">
            <img
              className="w-[350px] h-[350px] rounded-full object-cover"
              alt="Juan Bocanegra profile photo"
              src="/perfil.jpg"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 w-full flex justify-start  md:ml-[24rem]">
          <p className="font-mono text-sm text-white">
            Corporation Universitaria Iberoamericana - 2025
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
