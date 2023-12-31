import { Typography } from "@mui/material";

function TitleH2({ children }: any) {
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
