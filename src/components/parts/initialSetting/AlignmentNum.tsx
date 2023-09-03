import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { castleNumber } from "../../../constants/constants";

export default function AlignmentNum({ castleColor, castleChange }: any) {
  const [selectedNumber, setSelectedNumber] = useState(1);

  useEffect(() => {
    const savedAlignmentBlueNum = localStorage.getItem("alignmentBlueNum");
    if (savedAlignmentBlueNum) {
      setSelectedNumber(JSON.parse(savedAlignmentBlueNum));

      // 城の選択状態を判断して castleChange を呼び出す
      if (JSON.parse(savedAlignmentBlueNum) === "1") {
        castleChange(1, "blue");
      } else if (JSON.parse(savedAlignmentBlueNum) === "2") {
        castleChange(2, "blue");
      } else if (JSON.parse(savedAlignmentBlueNum) === "3") {
        castleChange(3, "blue");
      } else if (JSON.parse(savedAlignmentBlueNum) === "4") {
        castleChange(4, "blue");
      } else if (JSON.parse(savedAlignmentBlueNum) === "5") {
        castleChange(5, "blue");
      }
    }
  }, []);

  const handleButtonClick = (value: number) => {
    setSelectedNumber(value);
    castleChange(value, "blue");
    localStorage.setItem("alignmentBlueNum", JSON.stringify(value));
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
        value={
          selectedNumber ? 1 : "true" ? 2 : "true" ? 3 : "true" ? 4 : "true"
        }
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
