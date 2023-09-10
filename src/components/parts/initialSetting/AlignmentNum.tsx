import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { castleNumber } from "../../../constants/constants";

export default function AlignmentNum({
  castleColorJa,
  castleColorEn,
  castleChange,
}: any) {
  const [selectedNumber, setSelectedNumber] = useState(1);

  useEffect(() => {
    const savedAlignmentCastle = localStorage.getItem(castleColorEn);
    if (savedAlignmentCastle) {
      const AlignmentCastle = JSON.parse(savedAlignmentCastle);
      setSelectedNumber(AlignmentCastle);
      castleChange(AlignmentCastle, castleColorEn);
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
        青城hoge
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
