import "./App.css";
import { useState, MouseEvent } from "react";
import { useForm } from "react-hook-form";
import { CalcFormInput } from "./types/types";

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
      [newData.string]: newData.value,
    }));
  };

  const [selectCastleKind, setSelectCastleKind] = useState("red");

  // 選択された城種別を登録し、計算機能を実行
  const updateSelectCastleKind = (
    event: MouseEvent<HTMLElement>,
    newCastleAlignment: string
  ): void => {
    setSelectCastleKind(newCastleAlignment);
  };

  const [stackNumber, setStackNumber] = useState(0);

  // 計算機能
  const calculator = (): void => {
    const minNum = Number(getValues(["minNum"]));
    const secNum = Number(getValues(["secNum"]));
    const deckNum = Number(localStorage.getItem("deckNum"));

    const convertSecToMin = secNum / 60;
    const totalNum = minNum + convertSecToMin;
    const oneDeckSec = 60 / deckNum;

    setStackNumber(Math.ceil((totalNum * 60) / oneDeckSec));
  };
  return {
    alignmentNum,
    castleChange,
    updateSelectCastleKind,
    selectCastleKind,
    stackNumber,
    register,
    calculator,
  };
}
