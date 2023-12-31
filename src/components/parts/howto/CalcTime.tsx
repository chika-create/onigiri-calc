import { Box, Typography, TextField } from "@mui/material";

export default function CalcTime() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "auto 1fr auto 1fr auto",
        mb: 3,
      }}
    >
      <Typography
        sx={{
          alignSelf: "center",
        }}
      >
        守る時間
      </Typography>
      <TextField
        id="outlined-basic"
        type="number"
        variant="outlined"
        label="min"
        value={10}
        sx={{
          ml: 2,
        }}
      />
      <Typography
        sx={{
          alignSelf: "center",
          ml: 2,
        }}
      >
        分
      </Typography>
      <TextField
        id="outlined-basic"
        type="number"
        label="sec"
        variant="outlined"
        value={30}
        sx={{
          ml: 2,
        }}
      />

      <Typography
        sx={{
          alignSelf: "center",
          ml: 2,
        }}
      >
        秒
      </Typography>
    </Box>
  );
}
