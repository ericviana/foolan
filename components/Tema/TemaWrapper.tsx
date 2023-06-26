'use client'
import { PropsWithChildren, useEffect, useState } from "react";
import { BotaoTema, Temas } from "../BotaTema";

export const TemaWrapper = (props: PropsWithChildren) => {
  const temaDoNavegador = window?.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
  const [tema, setTema] = useState<Temas>(localStorage?.tema || temaDoNavegador);

  return (
    <div className={tema}>
      <BotaoTema temaHooks={[tema, setTema]} />
      {props.children}
    </div>
  );
};
