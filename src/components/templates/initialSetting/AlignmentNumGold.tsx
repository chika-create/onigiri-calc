import React, { useState } from "react";
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
  // const alignmentRed = props.alignmentRed;
  // const alignmentBlue = props.alignmentBlue;
  // const alignmentGold = props.alignmentGold;

  const [alignmentGoldNum, setAlignmentGoldNum] = useState<ToggleSelectedType>({
    1: true,
    2: false,
    3: false,
    4: false,
  });

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
        sx={{
          ml: 2,
        }}
      >
        <ToggleButton
          value="1"
          selected={alignmentGoldNum[1]}
          onClick={() => {
            castleChange(1, "gold");
            setAlignmentGoldNum({
              1: true,
              2: false,
              3: false,
              4: false,
            });
          }}
          aria-label="left aligned"
          sx={{
            width: 1 / 4,
          }}
        >
          1
        </ToggleButton>
        <ToggleButton
          value="2"
          selected={alignmentGoldNum[2]}
          onClick={() => {
            castleChange(2, "gold");
            setAlignmentGoldNum({
              1: false,
              2: true,
              3: false,
              4: false,
            });
          }}
          aria-label="left aligned"
          sx={{
            width: 1 / 4,
          }}
        >
          2
        </ToggleButton>
        <ToggleButton
          value="3"
          selected={alignmentGoldNum[3]}
          onClick={() => {
            castleChange(3, "red");
            setAlignmentGoldNum({
              1: false,
              2: false,
              3: true,
              4: false,
            });
          }}
          aria-label="left aligned"
          sx={{
            width: 1 / 4,
          }}
        >
          3
        </ToggleButton>
        <ToggleButton
          value="4"
          selected={alignmentGoldNum[4]}
          onClick={() => {
            castleChange(4, "red");
            setAlignmentGoldNum({
              1: false,
              2: false,
              3: false,
              4: true,
            });
          }}
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
