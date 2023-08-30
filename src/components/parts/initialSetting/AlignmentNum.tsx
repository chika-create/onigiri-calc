import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { castleNumber } from "../../../constants/constants";

type ToggleSelectedType = {
  [key: number]: boolean;
};

export default function AlignmentNum({ castleColor, castleChange }: any) {
  const [alignmentGoldNum, setAlignmentGoldNum] = useState<ToggleSelectedType>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  useEffect(() => {
    const savedAlignmentGoldNum = localStorage.getItem("alignmentGoldNum");
    if (savedAlignmentGoldNum) {
      setAlignmentGoldNum(JSON.parse(savedAlignmentGoldNum));
      console.log(savedAlignmentGoldNum);

      // 城の選択状態を判断して castleChange を呼び出す
      if (JSON.parse(savedAlignmentGoldNum)[1]) {
        castleChange(1, "gold");
      } else if (JSON.parse(savedAlignmentGoldNum)[2]) {
        castleChange(2, "gold");
      } else if (JSON.parse(savedAlignmentGoldNum)[3]) {
        castleChange(3, "gold");
      } else if (JSON.parse(savedAlignmentGoldNum)[4]) {
        castleChange(4, "gold");
      } else if (JSON.parse(savedAlignmentGoldNum)[5]) {
        castleChange(5, "gold");
      }
    }
  }, []);

  const handleButtonClick = (value: number) => {
    castleChange(value, "gold");
    setAlignmentGoldNum((prev) => {
      const newAlignmentGoldNum = {
        1: value === 1,
        2: value === 2,
        3: value === 3,
        4: value === 4,
        5: value === 5,
      };
      localStorage.setItem(
        "alignmentGoldNum",
        JSON.stringify(newAlignmentGoldNum)
      );
      return newAlignmentGoldNum;
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
        金城
      </Typography>
      <ToggleButtonGroup
        exclusive
        value={
          alignmentGoldNum[1]
            ? 1
            : alignmentGoldNum[2]
            ? 2
            : alignmentGoldNum[3]
            ? 3
            : alignmentGoldNum[4]
            ? 4
            : 5
        }
        sx={{
          ml: 2,
        }}
      >
        {castleNumber.map((item) => {
          return (
            <ToggleButton
              value={item}
              selected={alignmentGoldNum[item]}
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
