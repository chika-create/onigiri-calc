import "./App.css";
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { CalcFormInput } from "./Types";

export function CalcFunc() {
  // 計算機能用
  const [numNumber, setNumNumber] = useState(0);

  const { register, watch, getValues } = useForm<CalcFormInput>();

  // 城種別ごとのデッキ数の取得
  const castleChange = (value: number, string: string): void => {
    const newData = {
      value: value,
      string: string,
    };
    if (newData.string === "blue") {
      setAlignmentBlue(newData.value);
    } else if (newData.string === "gold") {
      setAlignmentGold(newData.value);
    } else {
      setAlignmentRed(newData.value);
    }
  };

  // 城種別ごとのデッキ数
  const [alignmentNum, setAlignmentNum] = useState(0);
  const [alignmentRed, setAlignmentRed] = useState(0);
  const [alignmentBlue, setAlignmentBlue] = useState(0);
  const [alignmentGold, setAlignmentGold] = useState(0);

  // どの城種別で計算するか
  const castleKinds = (
    event: React.MouseEvent<HTMLElement>,
    newCastelAlignment: string
  ): void => {
    castleKindsSwitch(newCastelAlignment);
    calculator();
  };

  // どの城種別を選択したかによって、デッキ数を取得
  const castleKindsSwitch = (item: string): void => {
    switch (item) {
      case "blue":
        setAlignmentNum(alignmentBlue);
        break;
      case "gold":
        setAlignmentNum(alignmentGold);
        break;
      default:
        setAlignmentNum(alignmentRed);
    }
  };

  // 計算機能
  const calculator = (): void => {
    const minNum = Number(getValues(["minNum"]));
    let secNum = Number(getValues(["secNum"]));
    let deckNum = Number(getValues(["deckNum"]));
    let totalNum = 0;

    secNum = secNum / 60;
    totalNum = minNum + secNum;
    deckNum = 60 / deckNum;
    setNumNumber(Math.ceil((totalNum * 60) / deckNum));
  };
  return {
    alignmentNum,
    castleChange,
    castleKinds,
    numNumber,
    register,
  };
}
