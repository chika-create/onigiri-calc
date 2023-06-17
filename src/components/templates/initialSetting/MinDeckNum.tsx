// import { useRef } from "react";
import { Box, Typography, TextField } from "@mui/material";

export default function MinDeckNum(props: any) {
  const register = props.register;

  // デッキ数計算用
  // const inputRefDeck = useRef(null);

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
        // error={inputDeckError}
        // inputRef={inputRefDeck}
        // defaultValue=""
        id="outlined-basic"
        type="number"
        // label="Number"
        variant="outlined"
        // helperText={inputRefDeck?.current?.validationMessage}
        // label="deckNum"
        {...register("deckNum")}
        sx={{
          ml: 2,
        }}
      />
    </Box>
  );
}
