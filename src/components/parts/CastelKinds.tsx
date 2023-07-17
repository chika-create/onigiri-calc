import React from "react";
import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

export default function CastelKinds(props: any) {
  const castleKinds = props.onClick;

  const [toggleStr, setToggleStr] = React.useState<string | null>("left");

  const toggleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setToggleStr(newAlignment);
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        p: 3,
      }}
    >
      <Typography
        sx={{
          alignSelf: "center",
        }}
      >
        城種別
      </Typography>

      <ToggleButtonGroup
        value={toggleStr}
        exclusive
        onChange={toggleChange}
        aria-label="text alignment"
      >
        <ToggleButton
          value="red"
          onClick={castleKinds}
          aria-label="left aligned"
          sx={{
            width: 1 / 3,
          }}
        >
          赤城
        </ToggleButton>
        <ToggleButton
          value="blue"
          onClick={castleKinds}
          aria-label="left aligned"
          sx={{
            width: 1 / 3,
          }}
        >
          青城
        </ToggleButton>
        <ToggleButton
          value="gold"
          onClick={castleKinds}
          aria-label="left aligned"
          sx={{
            width: 1 / 3,
          }}
        >
          金城
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
