import "./App.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CalcFormInput } from "./types/types";

export function CalcFunc() {
  // 計算機能用
  const { register, getValues } = useForm<CalcFormInput>();
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
    stackNumber,
    register,
    calculator,
  };
}
