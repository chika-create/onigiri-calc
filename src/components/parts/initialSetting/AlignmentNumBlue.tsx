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

export default function AlignmentNumBlue(props: any) {
  const castleChange = props.castleChange;

  const [alignmentBlueNum, setAlignmentBlueNum] = useState<ToggleSelectedType>({
    1: true,
    2: false,
    3: false,
    4: false,
  });

  useEffect(() => {
    // コンポーネントがマウントされた時にlocalStorageから値を読み込む
    const savedAlignmentBlueNum = localStorage.getItem("alignmentBlueNum");
    if (savedAlignmentBlueNum) {
      setAlignmentBlueNum(JSON.parse(savedAlignmentBlueNum));
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
            : 4
        }
        sx={{
          ml: 2,
        }}
      >
        <ToggleButton
          value={1}
          selected={alignmentBlueNum[1]}
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
          selected={alignmentBlueNum[2]}
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
          selected={alignmentBlueNum[3]}
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
          selected={alignmentBlueNum[4]}
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
