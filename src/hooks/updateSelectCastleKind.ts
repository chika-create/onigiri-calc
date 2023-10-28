import { useState, MouseEvent } from "react";

function UpdateSelectCastleKind():void {
  const [selectCastleKind, setSelectCastleKind] = useState("red");

  // 選択された城種別を登録し、計算機能を実行
  const updateSelectCastleKind2 = (
    event: MouseEvent<HTMLElement>,
    newCastleAlignment: string
  ): void => {
    setSelectCastleKind(newCastleAlignment);
  };
  // return null;
}

export default UpdateSelectCastleKind;