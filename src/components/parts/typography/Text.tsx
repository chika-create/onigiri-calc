import { ReactNode } from "react";
import { Typography, TypographyProps } from "@mui/material";

interface TextProps extends TypographyProps {
  children: ReactNode;
}

function Text({ children, ...typographyProps }: TextProps) {
  return (
    <Typography
      sx={{
        fontSize: 14,
        mb: 2,
      }}
      {...typographyProps}
    >
      {children}
    </Typography>
  );
}

export default Text;
