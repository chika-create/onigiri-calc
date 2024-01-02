import { ReactNode } from "react";
import { Typography, TypographyProps } from "@mui/material";

interface TitleH2Props extends TypographyProps {
  children: ReactNode;
}

function TitleH2({ children, ...typographyProps }: TitleH2Props) {
  return (
    <Typography
      variant="h2"
      sx={{
        fontWeight: "medium",
        fontSize: 20,
        mb: 2,
      }}
      {...typographyProps}
    >
      {children}
    </Typography>
  );
}

export default TitleH2;
