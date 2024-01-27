import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { castleNumber } from "../../../../constants/constants";

interface AlignmentNumProps {
  selectedNumber: number;
  castleColorJa: string;
}

export default function AlignmentNum({
  selectedNumber,
  castleColorJa,
}: AlignmentNumProps) {
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
        {castleColorJa}城
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
              key={item}
              value={item}
              selected={selectedNumber === item}
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
