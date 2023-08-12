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

export default function AlignmentNumRed(props: any) {
  const castleChange = props.castleChange;

  const [alignmentRedNum, setAlignmentRedNum] = useState<ToggleSelectedType>({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  useEffect(() => {
    const savedAlignmentRedNum = localStorage.getItem("alignmentRedNum");
    if (savedAlignmentRedNum) {
      setAlignmentRedNum(JSON.parse(savedAlignmentRedNum));

      // 城の選択状態を判断して castleChange を呼び出す
      if (JSON.parse(savedAlignmentRedNum)[1]) {
        castleChange(1, "red");
      } else if (JSON.parse(savedAlignmentRedNum)[2]) {
        castleChange(2, "red");
      } else if (JSON.parse(savedAlignmentRedNum)[3]) {
        castleChange(3, "red");
      } else if (JSON.parse(savedAlignmentRedNum)[4]) {
        castleChange(4, "red");
      } else if (JSON.parse(savedAlignmentRedNum)[5]) {
        castleChange(5, "red");
      }
    }
  }, []);

  const handleButtonClick = (value: number) => {
    castleChange(value, "red");
    setAlignmentRedNum((prev) => {
      const newAlignmentRedNum = {
        1: value === 1,
        2: value === 2,
        3: value === 3,
        4: value === 4,
        5: value === 5,
      };
      localStorage.setItem(
        "alignmentRedNum",
        JSON.stringify(newAlignmentRedNum)
      );
      return newAlignmentRedNum;
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
        赤城
      </Typography>
      <ToggleButtonGroup
        exclusive
        value={
          alignmentRedNum[1]
            ? 1
            : alignmentRedNum[2]
            ? 2
            : alignmentRedNum[3]
            ? 3
            : alignmentRedNum[4]
            ? 4
            : 5
        }
        sx={{
          ml: 2,
        }}
      >
        <ToggleButton
          value={1}
          selected={alignmentRedNum[1]}
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
          selected={alignmentRedNum[2]}
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
          selected={alignmentRedNum[3]}
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
          selected={alignmentRedNum[4]}
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
          selected={alignmentRedNum[5]}
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
