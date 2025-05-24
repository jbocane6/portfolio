import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { ArrowRight } from "lucide-react";
import React from "react";

export const ContactSection = () => {
  return (
    <section className="w-full py-16 bg-[#080808] text-white">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="font-['Raleway-ExtraBold',Helvetica] font-extrabold text-[34px] text-center mb-4">
          Contacto
        </h2>

        <p
          className="max-w-[520px] text-center mb-12"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "24px",
            letterSpacing: "1%",
            color: "#9c9c9c",
          }}
        >
          Si quieres conocer un poco más sobre mi trabajo, o quieres hablar de
          un nuevo proyecto, deja tus datos y un mensaje.
        </p>

        <Card className="w-full max-w-[350px] bg-[#080808] border-none">
          <CardContent className="p-0 space-y-6">
            <div className="flex flex-col gap-[5px]">
              <label className="font-['IBM_Plex_Mono-SemiBold',Helvetica] font-semibold text-white text-xs">
                Email
              </label>
              <Input
                className="h-10 bg-[#f7f7f7] border-[#d7d7d7] font-['IBM_Plex_Mono-Regular',Helvetica] text-xs text-[#757575]"
                placeholder="Ingresa tu email"
              />
            </div>

            <div className="flex flex-col gap-[5px]">
              <label className="font-['IBM_Plex_Mono-SemiBold',Helvetica] font-semibold text-white text-xs">
                Teléfono
              </label>
              <Input
                className="h-10 bg-[#f7f7f7] border-[#d7d7d7] font-['IBM_Plex_Mono-Regular',Helvetica] text-xs text-[#757575]"
                placeholder="Ingresa teléfono"
              />
            </div>

            <div className="flex flex-col gap-[5px]">
              <label className="font-['IBM_Plex_Mono-SemiBold',Helvetica] font-semibold text-white text-xs">
                Message
              </label>
              <Textarea
                className="h-[120px] bg-[#f7f7f7] border-[#d7d7d7] font-['IBM_Plex_Mono-Regular',Helvetica] text-xs text-[#757575]"
                placeholder="Ingresa tu mensaje"
              />
            </div>

            <Button className="w-full h-[50px] py-4 bg-[#3e8e00] hover:bg-[#3e8e00]/90 border border-solid border-[#61b91b] shadow-[0px_8px_30px_#3f8e004c] font-['IBM_Plex_Mono-Bold',Helvetica] font-bold text-sm flex items-center justify-center">
              Enviar
              <ArrowRight className="ml-2 h-2.5 w-[9.89px]" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
