import { ReactNode } from "react";
import { Typography, TypographyProps } from "@mui/material";

interface TextProps extends TypographyProps {
  children: ReactNode;
}

function Text({ children }: TextProps) {
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
