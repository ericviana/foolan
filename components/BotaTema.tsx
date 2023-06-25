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
      className="fixed"
    >
      Alternar tema
    </button>  
  );
};
