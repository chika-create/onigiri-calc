import { Box, Typography, TextField } from "@mui/material";

export default function MinDeckNum(props: any) {
  const register = props.register;

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
        {...register("deckNum")}
        sx={{
          ml: 2,
        }}
      />
    </Box>
  );
}
