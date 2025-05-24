import { Card, CardContent } from "./ui/blackcard";
import React from "react";

export default function ProjectsSection() {
  // Project data for mapping
  const projects = [
    {
      id: 1,
      title: "Gestor de reservas",
      description:
        "Integre un servicio que através de un lector de códigos permitía obtener la información de la cédula de un usuario y confirmar la asistencia a un evento.",
    },
    {
      id: 2,
      title: "Administrador de KPIs",
      description:
        "Junto a la startup CUBE, apoye en la creación desde el back de los servicios necesarios para la gestión y administración de KPIs de una empresa.",
    },
    {
      id: 3,
      title: "Recotyre",
      description:
        "Aplicación para realizar la trazabilidad de recolección y disposición de llantas usadas.",
    },
    {
      id: 4,
      title: "Asoblockchain",
      description:
        "Aplicación para el registro de perfiles profesionales con información resguardada a través de Blockchain.",
    },
  ];

  return (
    <section className="w-full py-20 bg-[#080808]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="font-['Raleway-ExtraBold',Helvetica] font-extrabold text-white text-[34px] text-center mb-4">
            Proyectos
          </h2>
          <p className="font-['IBM_Plex_Mono-Regular',Helvetica] font-normal text-[#9c9c9c] text-sm text-center tracking-[0.14px] leading-6 max-w-[420px]">
            A lo largo de estos años, he aportado valor a través de los
            siguientes proyectos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-transparent border-none rounded-md mx-auto"
            >
              <CardContent className="p-8">
                <h3 className="font-['Raleway-Bold',Helvetica] font-bold text-white text-lg text-center mb-6">
                  {project.title}
                </h3>
                <p className="font-['IBM_Plex_Mono-Regular',Helvetica] font-normal text-[#9c9c9c] text-sm tracking-[0.14px] leading-6">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
