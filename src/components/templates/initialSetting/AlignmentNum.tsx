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

export default function AlignmentNum(props: any) {
  const alignmentRed = props.alignmentRed;
  const alignmentBlue = props.alignmentBlue;
  const alignmentGold = props.alignmentGold;

  const castleChange = props.castleChange;
  // const [selected1, setSelected1] = React.useState(false);
  // const [selected2, setSelected2] = React.useState(false);
  // const [selected3, setSelected3] = React.useState(false);
  // const [selected4, setSelected4] = React.useState(false);

  //export function useToggleSelected() {
  const [alignmentRedNum, setAlignmentRedNum] = useState<ToggleSelectedType>({
    1: true,
    2: false,
    3: false,
    4: false,
  });

  const [alignmentBlueNum, setAlignmentBlueNum] = useState<ToggleSelectedType>({
    1: true,
    2: false,
    3: false,
    4: false,
  });

  const [alignmentGoldNum, setAlignmentGoldNum] = useState<ToggleSelectedType>({
    1: true,
    2: false,
    3: false,
    4: false,
  });

  // return {
  //   alignmentRedNum,
  //   setAlignmentRedNum,
  //   alignmentBlueNum,
  //   setAlignmentBlueNum,
  //   alignmentGoldNum,
  //   setAlignmentGoldNum,
  // };
  //}

  return (
    <>
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
          // label="alignmentRed"
          // value={alignmentRed}
          // onChange={() => castleChange(alignmentRed, "red")}
          exclusive
          sx={{
            ml: 2,
          }}
        >
          <ToggleButton
            value="1"
            selected={alignmentRedNum[1]}
            onClick={() => {
              castleChange(1, "red");
              setAlignmentRedNum((prevAlignmentRedNum) => ({
                ...prevAlignmentRedNum,
                1: true,
                2: false,
                3: false,
                4: false,
              }));
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
            selected={alignmentRedNum[2]}
            onClick={() => {
              castleChange(2, "red");
              setAlignmentRedNum((prevAlignmentRedNum) => ({
                ...prevAlignmentRedNum,
                1: false,
                2: true,
                3: false,
                4: false,
              }));
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
            selected={alignmentRedNum[3]}
            onClick={() => {
              castleChange(3, "red");
              setAlignmentRedNum((prevAlignmentRedNum) => ({
                ...prevAlignmentRedNum,
                1: false,
                2: false,
                3: true,
                4: false,
              }));
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
            selected={alignmentRedNum[4]}
            onClick={() => {
              castleChange(4, "red");
              setAlignmentRedNum((prevAlignmentRedNum) => ({
                ...prevAlignmentRedNum,
                1: false,
                2: false,
                3: false,
                4: true,
              }));
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
          // label="alignmentBlue"
          // value={alignmentBlue}
          // onChange={castleChangeBlue}
          exclusive
          sx={{
            ml: 2,
          }}
        >
          <ToggleButton
            value="1"
            onClick={() => castleChange(1, "blue")}
            aria-label="left aligned"
            sx={{
              width: 1 / 4,
            }}
          >
            1
          </ToggleButton>
          <ToggleButton
            value="2"
            onClick={() => castleChange(2, "blue")}
            aria-label="left aligned"
            sx={{
              width: 1 / 4,
            }}
          >
            2
          </ToggleButton>
          <ToggleButton
            value="3"
            onClick={() => castleChange(3, "blue")}
            aria-label="left aligned"
            sx={{
              width: 1 / 4,
            }}
          >
            3
          </ToggleButton>
          <ToggleButton
            value="4"
            onClick={() => castleChange(4, "blue")}
            aria-label="left aligned"
            sx={{
              width: 1 / 4,
            }}
          >
            4
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
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
          // label="alignmentGold"
          // value={alignmentGold}
          // onChange={castleChangeGold}
          exclusive
          sx={{
            ml: 2,
          }}
        >
          <ToggleButton
            value="1"
            onClick={() => castleChange(1, "gold")}
            aria-label="left aligned"
            sx={{
              width: 1 / 4,
            }}
          >
            1
          </ToggleButton>
          <ToggleButton
            value="2"
            onClick={() => castleChange(2, "gold")}
            aria-label="left aligned"
            sx={{
              width: 1 / 4,
            }}
          >
            2
          </ToggleButton>
          <ToggleButton
            value="3"
            onClick={() => castleChange(3, "gold")}
            aria-label="left aligned"
            sx={{
              width: 1 / 4,
            }}
          >
            3
          </ToggleButton>
          <ToggleButton
            value="4"
            onClick={() => castleChange(4, "gold")}
            aria-label="left aligned"
            sx={{
              width: 1 / 4,
            }}
          >
            4
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </>
  );
}
