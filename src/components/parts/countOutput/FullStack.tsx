import { useState, useContext } from "react";
import { numNumberContext } from "../../../SettingUseContext";

import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function FullStack(props: any) {
  const numNumber = useContext(numNumberContext);
  const copyToClipboard = props.copyToClipboard;
  const [openTip, setOpenTip] = useState<boolean>(false);

  const handleClickButtonFullStack = (): void => {
    setOpenTip(true);
    copyToClipboard(numNumber);
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
        }}
      >
        {numNumber}
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
