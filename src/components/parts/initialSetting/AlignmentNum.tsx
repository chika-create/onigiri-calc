import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { castleNumber } from "../../../constants";

type ToggleSelectedType = {
  [key: number]: boolean;
};

export default function AlignmentNum({ castleColor, castleChange }: any) {
  const [alignmentBlueNum, setAlignmentBlueNum] = useState<ToggleSelectedType>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  useEffect(() => {
    const savedAlignmentBlueNum = localStorage.getItem("alignmentBlueNum");
    if (savedAlignmentBlueNum) {
      setAlignmentBlueNum(JSON.parse(savedAlignmentBlueNum));

      // 城の選択状態を判断して castleChange を呼び出す
      if (JSON.parse(savedAlignmentBlueNum)[1]) {
        castleChange(1, "blue");
      } else if (JSON.parse(savedAlignmentBlueNum)[2]) {
        castleChange(2, "blue");
      } else if (JSON.parse(savedAlignmentBlueNum)[3]) {
        castleChange(3, "blue");
      } else if (JSON.parse(savedAlignmentBlueNum)[4]) {
        castleChange(4, "blue");
      } else if (JSON.parse(savedAlignmentBlueNum)[5]) {
        castleChange(5, "blue");
      }
    }
  }, []);

  const handleButtonClick = (value: number) => {
    castleChange(value, "blue");
    setAlignmentBlueNum((prev) => {
      const newAlignmentBlueNum = {
        1: value === 1,
        2: value === 2,
        3: value === 3,
        4: value === 4,
        5: value === 5,
      };
      localStorage.setItem(
        "alignmentBlueNum",
        JSON.stringify(newAlignmentBlueNum)
      );
      return newAlignmentBlueNum;
    });
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
        青城
      </Typography>
      <ToggleButtonGroup
        exclusive
        value={
          alignmentBlueNum[1]
            ? 1
            : alignmentBlueNum[2]
            ? 2
            : alignmentBlueNum[3]
            ? 3
            : alignmentBlueNum[4]
            ? 4
            : 5
        }
        sx={{
          ml: 2,
        }}
      >
        {castleNumber.map((item: number) => {
          return (
            <ToggleButton
              value={item}
              selected={alignmentBlueNum[item]}
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
