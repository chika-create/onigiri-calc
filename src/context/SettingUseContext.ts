import { createContext } from "react";

export const stackNumberContext = createContext(0);
export const alignmentNumContext = createContext(0);
export const alignmentNumbersContext = createContext({
  red: 1,
  blue: 2,
  gold: 3,
});

export const selectCastleKindContext = createContext("red");
