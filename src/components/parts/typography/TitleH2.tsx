import React from "react";
import { Typography } from "@mui/material";

function TitleH2(props: any) {
  const text = props.text;
  return (
    <Typography
      variant="h2"
      sx={{
        fontWeight: "medium",
        fontSize: 20,
        mb: 2,
      }}
    >
      {text}
    </Typography>
  );
}

export default TitleH2;
