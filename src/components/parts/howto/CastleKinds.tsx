import { useState, MouseEvent } from "react";
import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

export default function CastleKinds() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        mb: 5,
      }}
    >
      <Typography
        sx={{
          alignSelf: "center",
          mr: 1,
        }}
      >
        城種別
      </Typography>

      <ToggleButtonGroup exclusive aria-label="text alignment">
        <ToggleButton
          value="red"
          aria-label="left aligned"
          sx={{
            width: 1 / 3,
          }}
        >
          赤城
        </ToggleButton>
        <ToggleButton
          value="blue"
          aria-label="left aligned"
          selected={true}
          sx={{
            width: 1 / 3,
          }}
        >
          青城
        </ToggleButton>
        <ToggleButton
          value="gold"
          aria-label="left aligned"
          sx={{
            width: 1 / 3,
          }}
        >
          金城
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
