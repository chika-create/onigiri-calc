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

  useEffect(() => {
    const savedAlignmentNum = localStorage.getItem(castleColorEn);
    if (savedAlignmentNum) {
      const alignmentNum = JSON.parse(savedAlignmentNum);
      setSelectedNumber(alignmentNum);
      castleChange(alignmentNum, castleColorEn);
    }
  }, []);

  const handleButtonClick = (value: number) => {
    setSelectedNumber(value);
    castleChange(value, castleColorEn);
    localStorage.setItem(castleColorEn, JSON.stringify(value));
  };

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
              onClick={() => handleButtonClick(item)}
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
