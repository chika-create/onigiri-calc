import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

export default function AlignmentNum(props: any) {
  const alignmentRed = props.alignmentRed;
  const alignmentBlue = props.alignmentBlue;
  const alignmentGold = props.alignmentGold;

  const castleChange = props.castleChange;

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
            // selected={alignmentRedNum[1]}
            value="1"
            onClick={() => castleChange(1, "red")}
            aria-label="left aligned"
            sx={{
              width: 1 / 4,
            }}
          >
            1
          </ToggleButton>
          <ToggleButton
            value="2"
            onClick={() => castleChange(2, "red")}
            aria-label="left aligned"
            sx={{
              width: 1 / 4,
            }}
          >
            2
          </ToggleButton>
          <ToggleButton
            value="3"
            onClick={() => castleChange(3, "red")}
            aria-label="left aligned"
            sx={{
              width: 1 / 4,
            }}
          >
            3
          </ToggleButton>
          <ToggleButton
            value="4"
            onClick={() => castleChange(4, "red")}
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
