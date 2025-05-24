import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function ExperienceSection() {
  return (
    <section className="w-full py-16 flex flex-col items-center bg-white">
      <div className="max-w-[1110px] w-full flex flex-col items-center">
        <h2 className="font-extrabold text-[34px] text-[#080808] text-center font-['Raleway-ExtraBold',Helvetica] mb-16">
          Experiencia
        </h2>

        <p
          className="max-w-[480px] text-[14px] font-normal leading-6 tracking-[0.01em] text-center font-['IBM_Plex_Mono',Helvetica] mb-0.5"
        >
          Desde el año 2022 vengo desempeñandome como desarrollador FUllStack,
          en tan solo un mes, y gracias a mis capacidades y esfuerzo, fuí
          seleccionado como líder técnico de uno de los proyectos más ambiciosos
          y más relevantes de la empresa.
        </p>

        <div className="w-full flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            className="flex-shrink-0"
            aria-label="Previous experience"
          >
            <ChevronLeft className="h-[30px] w-[30px]" />
          </Button>

          <Card className="max-w-[445px] w-full border-none shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col gap-8">
                <div className="w-full flex justify-center">
                  <div className="h-[250px] w-[250px] rounded-md overflow-hidden flex items-center justify-center">
                    <img
                      src="/logo.png"
                      alt="Company logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3
                    className="font-['Raleway',Helvetica] font-extrabold text-[18px] leading-[100%] tracking-[0.64px] align-bottom text-[#080808]"
                  >
                    Desarrollador FullStack - Líder Técnico
                    <br />
                    Compañía internacional de integración
                  </h3>

                  <p className="text-sm text-[#241e1e] font-['IBM_Plex_Mono-Regular',Helvetica] tracking-[1.84px] leading-6 max-w-[420px]">
                    Con coherencia y pasión, asumimos cada reto para inspirar el
                    cambio y alcanzar la excelencia en todo lo que hacemos.
                  </p>

                  <Button
                    className="bg-[#3e8e00] hover:bg-[#3e8e00]/90 border border-[#61b91b] shadow-[0px_8px_30px_#3f8e004c] h-auto py-2.5 px-6 font-['IBM_Plex_Mono-Bold',Helvetica] font-bold text-sm text-white"
                    asChild
                  >
                    <a
                      href="https://ci2.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5"
                    >
                      Conoce más
                      <ArrowRight className="h-2.5 w-[5.89px]" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button
            variant="ghost"
            size="icon"
            className="flex-shrink-0"
            aria-label="Next experience"
          >
            <ChevronRight className="h-[30px] w-[30px]" />
          </Button>
        </div>
      </div>
    </section>
  );
}
