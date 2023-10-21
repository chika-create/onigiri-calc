import { Box, Button } from "@mui/material";

export default function CalcButton(props: any) {
  const calculator = props.calculator;

  return (
    <Box sx={{ textAlign: "center" }}>
      <Button variant="contained" onClick={calculator}>
        計算する
      </Button>
    </Box>
  );
}
