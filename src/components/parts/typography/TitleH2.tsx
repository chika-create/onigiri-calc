import { Typography } from "@mui/material";
import { TextData } from "../../../types/types";

function TitleH2({ children }: TextData) {
  return (
    <Typography
      variant="h2"
      sx={{
        fontWeight: "medium",
        fontSize: 20,
        mb: 2,
      }}
    >
      {children}
    </Typography>
  );
}

export default TitleH2;
