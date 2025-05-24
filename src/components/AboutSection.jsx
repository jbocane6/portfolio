import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowRight } from "lucide-react";
import React from "react";
// Use public URLs for images stored in the public folder
const bigdata = "/bigdata.jpg";
const sena = "/sena.jpg";
const estudiante = "/estudiante.jpg";

export default function AboutSection() {
  // Education data for mapping
  const educationData = [
    {
      title: "Estudiante",
      program: "Especialización en Big Data y Analítica",
      institution: "Corporación Universitaria Iberoamericana",
      link: "https://www.ibero.edu.co/programas/posgrado-especializacion-en-big-data-y-analitica-virtual",
      buttonColor: "bg-[#ffa217]",
      buttonShadow: "shadow-[0px_8px_30px_#2ab0901a]",
      imagePosition: "right",
      imageSrc: bigdata,
    },
    {
      title: "Estudiante",
      program: "Ingeniería en ciencia de datos",
      institution: "Corporación Universitaria Iberoamericana",
      link: "https://www.ibero.edu.co/programas/pregrado-ingenieria-ciencia-de-datos-virtual",
      buttonColor: "bg-[#000aff]",
      buttonShadow: "shadow-[0px_8px_30px_#000aff1a]",
      imagePosition: "left",
      imageSrc: estudiante,
    },
    {
      title: "Tecnólogo",
      program: "Análisis y desarrollo de sistemas de información",
      institution: "Servicio Nacional de Aprendizaje - SENA",
      link: "https://disenometrologia.blogspot.com/p/blog-page_21.html",
      buttonColor: "bg-[#2ab090]",
      buttonShadow: "shadow-[0px_8px_30px_#2ab0901a]",
      imagePosition: "right",
      imageSrc: sena,
    },
  ];

  return (
    <section className="relative w-full bg-[#080808] py-12 px-4 md:px-0 bg-white">
      <div className="flex flex-col items-center mb-12">
        <h2 className="font-['Raleway-ExtraBold',Helvetica] font-extrabold text-[#000468] text-[34px] text-center tracking-[0] leading-normal">
          Sobre mí
        </h2>
        <p className="mt-12 max-w-[440px] font-['IBM_Plex_Mono-Regular',Helvetica] font-normal text-[#241e1e] text-sm text-center tracking-[0.14px] leading-6">
          Soy un tecnólogo en desarrollo de sistemas de información con más de 2
          años brindando soluciones a través de desarrollos de aplicaciones web,
          con igual experiencia en liderazgo de equipos, cumplimiento de metas y
          gestión directa con clientes.
        </p>
      </div>

      <div className="flex flex-col gap-16 items-center">
        {educationData.map((item, index) => (
          <Card key={index} className="border-none shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-row h-[300px] items-center justify-center">
                {item.imagePosition === "left" && (
                  <div className="w-[445px] h-[300px] overflow-hidden flex items-center justify-center">
                    <img
                      src={item.imageSrc}
                      alt={`${item.title} - ${item.program}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div
                  className={`flex flex-col justify-between ${item.imagePosition === "left" ? "ml-8" : "mr-8"} py-[71px] items-start text-left`}
                >
                  <div>
                    <h3 className="font-['Raleway-ExtraBold',Helvetica] font-extrabold text-[#000468] text-2xl tracking-[0] leading-normal whitespace-nowrap text-left">
                      {item.title}
                    </h3>
                    <div className="mt-10 w-[421px] font-['IBM_Plex_Mono-Regular',Helvetica] font-normal text-[#231e1e] text-sm tracking-[0.14px] leading-6 text-left">
                      {item.program}
                      <br />
                      <br />
                      {item.institution}
                    </div>
                  </div>

                  <Button
                    asChild
                    className={`${item.buttonColor} ${item.buttonShadow} rounded h-auto px-6 py-2.5 mt-8 w-fit`}
                  >
                    <a
                      href={item.link}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="flex items-center"
                    >
                      <span className="font-['IBM_Plex_Mono-Bold',Helvetica] font-bold text-white text-sm tracking-[0] leading-normal">
                        Más información
                      </span>
                      <ArrowRight className="ml-2.5 h-2.5 w-[5.89px]" />
                    </a>
                  </Button>
                </div>

                {item.imagePosition === "right" && (
                  <div className="w-[445px] h-[300px] overflow-hidden flex items-center justify-center">
                    <img
                      src={item.imageSrc}
                      alt={`${item.title} - ${item.program}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
