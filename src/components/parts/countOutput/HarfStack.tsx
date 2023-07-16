import { useContext } from "react";
import { numNumberTest } from "../../../SettingUseContext";

import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function HarfStack(props: any) {
  const numNumber = useContext(numNumberTest);
  const handleClickButton2 = props.handleClickButton2;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr auto",
      }}
    >
      <Typography
        sx={{
          alignSelf: "center",
        }}
      >
        再駐屯込み
      </Typography>
      <Typography
        sx={{
          fontWeight: "medium",
          fontSize: 30,
        }}
      >
        {Math.ceil(numNumber / 2)}
      </Typography>
      <Tooltip title="ContentCopyIcon" onClick={handleClickButton2}>
        <IconButton>
          <ContentCopyIcon
            sx={{
              width: "0.8em",
            }}
          />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
