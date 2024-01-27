import { useEffect, useState, ChangeEvent } from "react";
import { Box, Typography, TextField } from "@mui/material";

export default function MinDeckNum() {
  const [deckNum, setDeckNum] = useState<number | null>(38);

  useEffect(() => {
    // コンポーネントがマウントされた時にlocalStorageから値を読み込む
    const savedDeckNum = localStorage.getItem("deckNum");

    // savedDeckNumが null もしくは undefined じゃない場合に if に入る
    if (savedDeckNum) {
      setDeckNum(Number(savedDeckNum));
    } else {
      setDeckNum(38);
    }
  }, []);

  const handleDeckNumChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.trim() === "") {
      setDeckNum(null);
    } else {
      setDeckNum(Number(value));
      // 値が変更されるたびにlocalStorageに保存する
      localStorage.setItem("deckNum", String(value));
    }
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, auto 1fr)",
      }}
    >
      <Typography
        sx={{
          alignSelf: "center",
        }}
      >
        1分の駐屯数
      </Typography>
      <TextField
        id="outlined-basic"
        type="number"
        variant="outlined"
        value={deckNum === null ? "" : deckNum}
        onChange={handleDeckNumChange}
        sx={{
          ml: 2,
        }}
      />
    </Box>
  );
}
