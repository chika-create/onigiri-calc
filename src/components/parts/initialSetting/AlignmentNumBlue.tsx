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

export default function AlignmentNumBlue(props: any) {
  const castleChange = props.castleChange;

  const [alignmentBlueNum, setAlignmentBlueNum] = useState<ToggleSelectedType>({
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
        青城
      </Typography>
      <ToggleButtonGroup
        exclusive
        sx={{
          ml: 2,
        }}
      >
        <ToggleButton
          value="1"
          selected={alignmentBlueNum[1]}
          onClick={() => {
            castleChange(1, "blue");
            setAlignmentBlueNum({
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
          value="1"
          selected={alignmentBlueNum[2]}
          onClick={() => {
            castleChange(2, "blue");
            setAlignmentBlueNum({
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
          selected={alignmentBlueNum[3]}
          onClick={() => {
            castleChange(3, "blue");
            setAlignmentBlueNum({
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
          selected={alignmentBlueNum[4]}
          onClick={() => {
            castleChange(4, "blue");
            setAlignmentBlueNum({
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
