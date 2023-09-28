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
    updateAlignmentNum(newData.string, newData.value);
  };

  // 城種別ごとのデッキ数
  const [alignmentNum, setAlignmentNum] = useState({
    red: 1,
    blue: 2,
    gold: 3,
  });
  const [selectCastleKind, setSelectCastleKind] = useState("red");

  const updateAlignmentNum = (castleKind: string, number: number): void => {
    setAlignmentNum((prevAlignmentNum) => ({
      ...prevAlignmentNum,
      [castleKind]: number,
    }));
  };

  // どの城種別で計算するか
  const castleKinds = (
    event: React.MouseEvent<HTMLElement>,
    newCastelAlignment: string
  ): void => {
    setSelectCastleKind(newCastelAlignment);
    calculator();
  };

  // 計算機能
  const calculator = (): void => {
    const minNum = Number(getValues(["minNum"]));
    let secNum = Number(getValues(["secNum"]));
    let deckNum2 = 0;
    let totalNum = 0;

    const deckNum = localStorage.getItem("deckNum");
    deckNum2 = Number(deckNum);

    secNum = secNum / 60;
    totalNum = minNum + secNum;
    deckNum2 = 60 / deckNum2;

    setNumNumber(Math.ceil((totalNum * 60) / deckNum2));
  };
  return {
    alignmentNum,
    castleChange,
    castleKinds,
    selectCastleKind,
    numNumber,
    register,
  };
}
