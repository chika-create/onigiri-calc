import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { castleNumber } from "../../../../constants/constants";

export default function AlignmentNum(props: {
  selectedNumber: number;
  castleColorJa: string;
}) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        mb: 2,
      }}
    >
      <Typography
        sx={{
          alignSelf: "center",
        }}
      >
        {props.castleColorJa}城
      </Typography>
      <ToggleButtonGroup
        exclusive
        sx={{
          ml: 2,
        }}
      >
        {castleNumber.map((item: number) => {
          return (
            <ToggleButton
              value={item}
              selected={props.selectedNumber === item}
              aria-label="left aligned"
              sx={{
                width: 1 / 5,
              }}
            >
              {item}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </Box>
  );
}
