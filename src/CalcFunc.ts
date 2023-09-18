import "./App.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CalcFormInput } from "./types";

export function CalcFunc() {
  // 計算機能用
  const [numNumber, setNumNumber] = useState(0);
  const { register, getValues } = useForm<CalcFormInput>();

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
    updateAlignmentNum2(newData.string, newData.value);
  };

  // 城種別ごとのデッキ数
  const [alignmentNum, setAlignmentNum] = useState(0);
  const [alignmentNum2, setAlignmentNum2] = useState({
    red: 1,
    blue: 2,
    gold: 3,
  });
  const [alignmentRed, setAlignmentRed] = useState(0);
  const [alignmentBlue, setAlignmentBlue] = useState(0);
  const [alignmentGold, setAlignmentGold] = useState(0);
  const [selectCastleKind, setSelectCastleKind] = useState("");

  const updateAlignmentNum2 = (castleKind: string, number: number): void => {
    setAlignmentNum2((prevAlignmentNum) => ({
      ...prevAlignmentNum,
      [castleKind]: number,
    }));
  };

  // どの城種別で計算するか
  const castleKinds = (
    event: React.MouseEvent<HTMLElement>,
    newCastelAlignment: string
  ): void => {
    castleKindsSwitch(newCastelAlignment);
    setSelectCastleKind(newCastelAlignment);
    calculator();
  };

  // どの城種別を選択したかによって、デッキ数を取得
  const castleKindsSwitch = (item: string): void => {
    switch (item) {
      case "blue":
        setAlignmentNum(alignmentBlue);
        updateAlignmentNum2(item, alignmentBlue);
        break;
      case "gold":
        setAlignmentNum(alignmentGold);
        updateAlignmentNum2(item, alignmentGold);
        break;
      default:
        setAlignmentNum(alignmentRed);
        updateAlignmentNum2(item, alignmentRed);
    }
  };

  // 計算機能
  const calculator = (): void => {
    const minNum = Number(getValues(["minNum"]));
    let secNum = Number(getValues(["secNum"]));
    let deckNum2 = 0;
    let totalNum = 0;

    // console.log("calculator: " + minNum);

    const deckNum = localStorage.getItem("deckNum");
    deckNum2 = Number(deckNum);

    // console.log("calculator_2: " + deckNum2);

    secNum = secNum / 60;
    totalNum = minNum + secNum;
    deckNum2 = 60 / deckNum2;

    setNumNumber(Math.ceil((totalNum * 60) / deckNum2));
    // console.log("calculator_3: " + Math.ceil((totalNum * 60) / deckNum2));
  };
  return {
    alignmentNum,
    alignmentNum2,
    castleChange,
    castleKinds,
    selectCastleKind,
    numNumber,
    register,
  };
}
