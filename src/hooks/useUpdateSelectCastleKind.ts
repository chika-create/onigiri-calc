import { useState, MouseEvent } from "react";

type typeUpdateSelectCastleKind = {
  selectCastleKind: string;
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
    updateSelectCastleKind,
  };
}

export default useUpdateSelectCastleKind;
