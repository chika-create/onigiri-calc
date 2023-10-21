import { useState, MouseEvent } from "react";
import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

export default function CastleKinds(props: any) {
  const updateSelectCastleKind = props.onClick;
  const [toggleStr, setToggleStr] = useState<string | null>("left");

  const toggleChange = (
    event: MouseEvent<HTMLElement>,
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
          mr: 1,
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
          onClick={updateSelectCastleKind}
          aria-label="left aligned"
          sx={{
            width: 1 / 3,
          }}
        >
          赤城
        </ToggleButton>
        <ToggleButton
          value="blue"
          onClick={updateSelectCastleKind}
          aria-label="left aligned"
          sx={{
            width: 1 / 3,
          }}
        >
          青城
        </ToggleButton>
        <ToggleButton
          value="gold"
          onClick={updateSelectCastleKind}
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
