import { MoonIcon } from "@/assets/MoonIcon";
import { SunIcon } from "@/assets/SunIcon";
import { Dispatch, SetStateAction, useState } from "react";

type Temas = 'dark' | 'light';

type BotaoTemaProps = {
  temaHooks: [Temas, Dispatch<SetStateAction<Temas>>];
};

export const BotaoTema = (props: BotaoTemaProps) => {
  const [tema, setTema] = props.temaHooks;

  function alternarTema() {
    const temaOposto = tema === "dark" ? "light" : "dark";
    localStorage.tema = temaOposto;
    setTema(temaOposto);
  }

  return (
    <button
      aria-label={`Troca tema do site para ${tema === "dark" ? "escuro" : "claro"}`}
      onClick={alternarTema}
      className="fixed top-5 right-1/2 translate-x-1/2 sm:translate-x-0 sm:right-5"
    >
      {
        tema === "dark" ? (
          <SunIcon size={2} color="white" />
        ) : (
          <MoonIcon size={2} color="dark-gray" />
        )
      }
    </button>  
  );
};
