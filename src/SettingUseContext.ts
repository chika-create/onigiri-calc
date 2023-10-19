import { createContext } from "react";

export const numNumberContext = createContext<number>(0);
export const alignmentNumContext = createContext<number>(0);
export const alignmentNumbersContext = createContext({
  red: 1,
  blue: 2,
  gold: 3,
});

export const selectCastleKindContext = createContext<string>("red");
