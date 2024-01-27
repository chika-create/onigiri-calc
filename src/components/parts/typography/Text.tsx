import { Typography } from "@mui/material";
import { TextData } from "../../../types/types";

function Text({ children }: TextData) {
  return (
    <Typography
      sx={{
        fontSize: 14,
        mb: 2,
      }}
    >
      {children}
    </Typography>
  );
}

export default Text;
