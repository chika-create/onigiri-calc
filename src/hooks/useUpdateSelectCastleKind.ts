import { useState, MouseEvent } from "react";

type typeUpdateSelectCastleKind = {
  selectCastleKind2: string;
  updateSelectCastleKind: (
    event: MouseEvent<HTMLElement>,
    newCastleAlignment: string
  ) => void;
};

export function useUpdateSelectCastleKind(): typeUpdateSelectCastleKind {
  const [selectCastleKind2, setSelectCastleKind2] = useState("red");

  const updateSelectCastleKind: typeUpdateSelectCastleKind["updateSelectCastleKind"] =
    (event, newCastleAlignment) => {
      setSelectCastleKind2(newCastleAlignment);
    };

  return {
    selectCastleKind2,
    updateSelectCastleKind,
  };
}

export default useUpdateSelectCastleKind;
