import { Box, Typography, TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { CalcFormInput } from "../../types/types";

interface CalcTimeProps {
  register: UseFormRegister<CalcFormInput>;
}

export default function CalcTime({ register }: CalcTimeProps) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "auto 1fr auto 1fr auto",
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
        {...register("minNum")}
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
        {...register("secNum")}
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
