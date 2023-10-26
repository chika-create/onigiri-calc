import { useState, MouseEvent } from "react";

const [selectCastleKind, setSelectCastleKind] = useState("red");

// 選択された城種別を登録し、計算機能を実行
export const updateSelectCastleKind = (
  event: MouseEvent<HTMLElement>,
  newCastleAlignment: string
): void => {
  setSelectCastleKind(newCastleAlignment);
};