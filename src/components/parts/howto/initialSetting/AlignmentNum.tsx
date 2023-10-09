import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { castleNumber } from "../../../../constants/constants";
import { AlignmentNumProps } from "../../../../types";

export default function AlignmentNum({
  castleColorJa,
  castleColorEn,
  castleChange,
}: AlignmentNumProps) {
  const [selectedNumber, setSelectedNumber] = useState(1);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        mb: 3,
      }}
    >
      <Typography
        sx={{
          alignSelf: "center",
        }}
      >
        {castleColorJa}城
      </Typography>
      <ToggleButtonGroup
        exclusive
        sx={{
          ml: 2,
        }}
      >
        {castleNumber.map((item: number) => {
          return (
            <ToggleButton
              value={item}
              selected={selectedNumber === item}
              aria-label="left aligned"
              sx={{
                width: 1 / 5,
              }}
            >
              {item}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </Box>
  );
}
