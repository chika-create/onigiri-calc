import { Typography } from "@mui/material";

function Text({ children }: any) {
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
