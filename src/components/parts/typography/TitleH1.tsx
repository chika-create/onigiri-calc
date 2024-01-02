import { ReactNode } from "react";
import { Typography, TypographyProps } from "@mui/material";

interface TitleH1props extends TypographyProps {
  children: ReactNode;
}

function TitleH1({ children }: TitleH1props) {
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
