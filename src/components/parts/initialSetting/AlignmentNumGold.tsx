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
    1: true,
    2: false,
    3: false,
    4: false,
  });

  useEffect(() => {
    // コンポーネントがマウントされた時にlocalStorageから値を読み込む
    const savedAlignmentGoldNum = localStorage.getItem("alignmentGoldNum");
    if (savedAlignmentGoldNum) {
      setAlignmentGoldNum(JSON.parse(savedAlignmentGoldNum));
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
            : 4
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
            width: 1 / 4,
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
            width: 1 / 4,
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
            width: 1 / 4,
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
            width: 1 / 4,
          }}
        >
          4
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
