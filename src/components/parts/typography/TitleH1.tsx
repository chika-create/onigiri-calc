import { Typography } from "@mui/material";

function TitleH1({ children }: any) {
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
