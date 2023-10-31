import { useState, useContext } from "react";
import { stackNumberContext } from "../../../SettingUseContext";

import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function FullStack({ copyToClipboard }: any) {
  const stackNumber = useContext(stackNumberContext);
  const [openTip, setOpenTip] = useState<boolean>(false);

  const handleClickButtonFullStack = (): void => {
    setOpenTip(true);
    copyToClipboard(stackNumber);
  };

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
        積み切り駐屯
      </Typography>
      <Typography
        sx={{
          fontWeight: "medium",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        {stackNumber}
      </Typography>
      <Tooltip title="ContentCopyIcon" onClick={handleClickButtonFullStack}>
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
