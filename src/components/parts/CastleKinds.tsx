import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

interface CastleKindsProps {
  selectedToggleButton: string | null;
  toggleChange: (value: string) => void;
}

export default function CastleKinds({
  selectedToggleButton,
  toggleChange,
}: CastleKindsProps) {
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
        onChange={(event, value) => toggleChange(value as string)}
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
