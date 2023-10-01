import "./App.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CalcFormInput } from "./types";
import { LensTwoTone } from "@mui/icons-material";

export function CalcFunc() {
  // 計算機能用
  const { register, getValues } = useForm<CalcFormInput>();

  // 城種別ごとのデッキ数
  const [alignmentNum, setAlignmentNum] = useState({
    red: 1,
    blue: 2,
    gold: 3,
  });

  // 受け取ったデータを「城種別ごとのデッキ数を登録」に流す
  const castleChange = (value: number, string: string): void => {
    const newData = {
      value: value,
      string: string,
    };
    // 城種別ごとのデッキ数を登録
    setAlignmentNum((prevAlignmentNum) => ({
      ...prevAlignmentNum,
      [newData.value]: newData.value,
    }));
  };

  const [selectCastleKind, setSelectCastleKind] = useState("red");

  // 選択された城種別を登録し、計算機能を実行
  const updateSelectCastleKind = (
    event: React.MouseEvent<HTMLElement>,
    newCastelAlignment: string
  ): void => {
    setSelectCastleKind(newCastelAlignment);
    calculator();
  };

  const [numNumber, setNumNumber] = useState(0);

  // 計算機能
  const calculator = (): void => {
    const minNum = Number(getValues(["minNum"]));
    let secNum = Number(getValues(["secNum"]));
    let totalNum = 0;
    let oneDeckSec = 0;
    let deckNum = Number(localStorage.getItem("deckNum"));

    secNum = secNum / 60;
    totalNum = minNum + secNum;
    oneDeckSec = 60 / deckNum;

    setNumNumber(Math.ceil((totalNum * 60) / oneDeckSec));
  };
  return {
    alignmentNum,
    castleChange,
    updateSelectCastleKind,
    selectCastleKind,
    numNumber,
    register,
  };
}
