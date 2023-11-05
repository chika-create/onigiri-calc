import { useState, MouseEvent } from "react";

type typeUpdateSelectCastleKind = {
  selectCastleKind: string;
  setSelectCastleKind: (newCastleKind: string) => void;
  updateSelectCastleKind: (
    event: MouseEvent<HTMLElement>,
    newCastleAlignment: string
  ) => void;
};

export function useUpdateSelectCastleKind(): typeUpdateSelectCastleKind {
  const [selectCastleKind, setSelectCastleKind] = useState("red");

  const updateSelectCastleKind: typeUpdateSelectCastleKind["updateSelectCastleKind"] =
    (event, newCastleAlignment) => {
      setSelectCastleKind(newCastleAlignment);
    };

  return {
    selectCastleKind,
    setSelectCastleKind,
    updateSelectCastleKind,
  };
}

export default useUpdateSelectCastleKind;
