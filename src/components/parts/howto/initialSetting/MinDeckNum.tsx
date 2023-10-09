import { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";

export default function MinDeckNum() {
  const [deckNum, setDeckNum] = useState(0);
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
        sx={{
          ml: 2,
        }}
      />
    </Box>
  );
}
