import React from "react";
import { Typography } from "@mui/material";

function Text(props: any) {
  const text = props.text;
  return (
    <Typography
      sx={{
        fontSize: 14,
        mb: 2,
      }}
    >
      {text}
    </Typography>
  );
}

export default Text;
