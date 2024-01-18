import { useEffect, useState, ChangeEvent } from "react";
import { Box, Typography, TextField } from "@mui/material";

export default function MinDeckNum() {
  const [deckNum, setDeckNum] = useState(38);

  useEffect(() => {
    // コンポーネントがマウントされた時にlocalStorageから値を読み込む
    const savedDeckNum = localStorage.getItem("deckNum");
    if (savedDeckNum) {
      setDeckNum(Number(savedDeckNum));
    }
  }, []);

  const handleDeckNumChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setDeckNum(value);
    // 値が変更されるたびにlocalStorageに保存する
    localStorage.setItem("deckNum", String(value));
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
        value={deckNum}
        onChange={handleDeckNumChange}
        sx={{
          ml: 2,
        }}
      />
    </Box>
  );
}
