import { Box, Typography, TextField } from "@mui/material";

export default function MinDeckNum() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, auto 1fr)",
        mb: 5,
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
        value={38}
        sx={{
          ml: 2,
        }}
      />
    </Box>
  );
}
