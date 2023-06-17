// import { useRef } from "react";
import { Box, Typography, TextField } from "@mui/material";

export default function CalcTime(props: any) {
  // const inputRefNum = useRef(null);
  // const inputRefSec = useRef(null);
  const register = props.register;

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
        // error={inputNumError}
        // inputRef={inputRefNum}
        // defaultValue=""
        id="outlined-basic"
        type="number"
        variant="outlined"
        // helperText={inputRefNum?.current?.validationMessage}
        label="minNum"
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
        // error={inputSecError}
        // inputRef={inputRefSec}
        // defaultValue=""
        id="outlined-basic"
        type="number"
        label="secNum"
        variant="outlined"
        // helperText={inputRefSec?.current?.validationMessage}
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
