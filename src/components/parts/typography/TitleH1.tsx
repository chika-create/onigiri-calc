import React from "react";
import { Typography } from "@mui/material";

function TitleH1(props: any) {
  const text = props.text;
  return (
    <Typography
      variant="h1"
      sx={{
        fontWeight: "medium",
        fontSize: 25,
        mb: 4,
      }}
    >
      {text}
    </Typography>
  );
}

export default TitleH1;
