import { Typography } from "@mui/material";
import { TextData } from "../../../types/types";

function TitleH1({ children }: TextData) {
  return (
    <Typography
      variant="h1"
      sx={{
        fontWeight: "medium",
        fontSize: 25,
        mb: 4,
      }}
    >
      {children}
    </Typography>
  );
}

export default TitleH1;
