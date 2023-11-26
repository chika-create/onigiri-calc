import { Box, Button } from "@mui/material";

export default function CalcButton({
  getValues,
  setStackNumber,
  setStackNumberFunction,
}: any) {
  // 計算機能
  const calculator = (): void => {
    const minNum = Number(getValues(["minNum"]));
    const secNum = Number(getValues(["secNum"]));
    const deckNum = Number(localStorage.getItem("deckNum"));

    const convertSecToMin = secNum / 60;
    const totalNum = minNum + convertSecToMin;
    const oneDeckSec = 60 / deckNum;

    setStackNumberFunction(Math.ceil((totalNum * 60) / oneDeckSec));
    setStackNumber(Math.ceil((totalNum * 60) / oneDeckSec));
  };
  return (
    <Box sx={{ textAlign: "center" }}>
      <Button variant="contained" onClick={calculator}>
        計算する
      </Button>
    </Box>
  );
}
