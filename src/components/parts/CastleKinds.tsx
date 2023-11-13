import { useState, MouseEvent } from "react";
import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

type typeUpdateSelectCastleKind = {
  selectCastleKind: string;
  setSelectCastleKind: (newCastleKind: string) => void;
  updateSelectCastleKind: (
    event: MouseEvent<HTMLElement>,
    newCastleAlignment: string
  ) => void;
};

export default function CastleKinds({ setSelectCastleKind }: any) {
  const [selectedToggleButton, setSelectedToggleButton] = useState<
    string | null
  >("left");

  const updateSelectCastleKind: typeUpdateSelectCastleKind["updateSelectCastleKind"] =
    (event, newCastleAlignment) => {
      setSelectCastleKind(newCastleAlignment);
    };

  const toggleChange = (
    event: MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setSelectedToggleButton(newAlignment);
    updateSelectCastleKind(event, newAlignment);
    console.log("CastleKinds_newAlignment: ", newAlignment);

    setSelectCastleKind(newAlignment);
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
        value={selectedToggleButton}
        exclusive
        onChange={toggleChange}
      >
        <ToggleButton
          value="red"
          sx={{
            width: 1 / 3,
          }}
        >
          赤城
        </ToggleButton>
        <ToggleButton
          value="blue"
          sx={{
            width: 1 / 3,
          }}
        >
          青城
        </ToggleButton>
        <ToggleButton
          value="gold"
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
