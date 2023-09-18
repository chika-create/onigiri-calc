import React from "react";

export const numNumberContext = React.createContext<number>(0);
export const alignmentNumContext = React.createContext<number>(0);
export const alignmentNumContext2 = React.createContext({
  red: 1,
  blue: 2,
  gold: 3,
});

export const selectCastleKindContext = React.createContext<string>("");
