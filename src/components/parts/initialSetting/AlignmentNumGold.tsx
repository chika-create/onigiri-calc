import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

type ToggleSelectedType = {
  [key: number]: boolean;
};

export default function AlignmentNumGold(props: any) {
  const castleChange = props.castleChange;

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
        <ToggleButton
          value={1}
          selected={alignmentGoldNum[1]}
          onClick={() => handleButtonClick(1)}
          aria-label="left aligned"
          sx={{
            width: 1 / 5,
          }}
        >
          1
        </ToggleButton>
        <ToggleButton
          value={2}
          selected={alignmentGoldNum[2]}
          onClick={() => handleButtonClick(2)}
          aria-label="left aligned"
          sx={{
            width: 1 / 5,
          }}
        >
          2
        </ToggleButton>
        <ToggleButton
          value={3}
          selected={alignmentGoldNum[3]}
          onClick={() => handleButtonClick(3)}
          aria-label="left aligned"
          sx={{
            width: 1 / 5,
          }}
        >
          3
        </ToggleButton>
        <ToggleButton
          value={4}
          selected={alignmentGoldNum[4]}
          onClick={() => handleButtonClick(4)}
          aria-label="left aligned"
          sx={{
            width: 1 / 5,
          }}
        >
          4
        </ToggleButton>
        <ToggleButton
          value={5}
          selected={alignmentGoldNum[5]}
          onClick={() => handleButtonClick(5)}
          aria-label="left aligned"
          sx={{
            width: 1 / 5,
          }}
        >
          5
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
