import { Box, Button } from "@mui/material";

export default function CalcButton({ calculator }: any) {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Button variant="contained" onClick={calculator}>
        計算する
      </Button>
    </Box>
  );
}
