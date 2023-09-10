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
    const savedAlignmentBlueNum = localStorage.getItem(castleColorEn);
    if (savedAlignmentBlueNum) {
      setSelectedNumber(JSON.parse(savedAlignmentBlueNum));

      // 城の選択状態を判断して castleChange を呼び出す
      if (JSON.parse(savedAlignmentBlueNum) === "1") {
        castleChange(1, castleColorEn);
      } else if (JSON.parse(savedAlignmentBlueNum) === "2") {
        castleChange(2, castleColorEn);
      } else if (JSON.parse(savedAlignmentBlueNum) === "3") {
        castleChange(3, castleColorEn);
      } else if (JSON.parse(savedAlignmentBlueNum) === "4") {
        castleChange(4, castleColorEn);
      } else if (JSON.parse(savedAlignmentBlueNum) === "5") {
        castleChange(5, castleColorEn);
      }
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
        // value={
        //   selectedNumber ? 1 : "true" ? 2 : "true" ? 3 : "true" ? 4 : "true"
        // }
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
