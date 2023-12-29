import React from "react";
import { Box, Button } from "@mui/material";
import { CalcFormInput } from "../../types/types";

interface CalcButtonProps {
  getValues: () => CalcFormInput;
  setStackNumberFunction: (requireStackNum: number) => void;
}

export default function CalcButton({
    getValues,
    setStackNumberFunction
  }: CalcButtonProps) {
  // 計算機能
  const calculator = (): void => {
    // 守る時間：分
    const minNum = Number(getValues().minNum);
    // 守る時間：秒
    const secNum = Number(getValues().secNum);
    // 守る時間：秒を分に換算
    const convertSecToMin = secNum / 60;
    // 守る時間の分に合算
    const totalNum = minNum + convertSecToMin;

    // 一分の駐屯数
    const deckNum = Number(localStorage.getItem("deckNum"));

    // 一駐屯にかかる秒数
    const oneDeckSec = 60 / deckNum;

    // 必要な駐屯数を切り捨て計算
    const requireStackNum = Math.floor((totalNum * 60) / oneDeckSec);

    setStackNumberFunction(requireStackNum);
  };
  return (
    <Box sx={{ textAlign: "center" }}>
      <Button variant="contained" onClick={calculator}>
        計算する
      </Button>
    </Box>
  );
}
