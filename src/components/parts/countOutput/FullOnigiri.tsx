import { useState, useContext } from "react";
import {
  numNumberContext,
  alignmentNumContext,
} from "../../../SettingUseContext";

import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function FullStack(props: any) {
  const numNumber = useContext(numNumberContext);
  const alignmentNum = useContext(alignmentNumContext);
  const copyToClipboard = props.copyToClipboard;
  const [openTip, setOpenTip] = useState<boolean>(false);

  const handleClickButtonFullOnigiri = (): void => {
    setOpenTip(true);
    copyToClipboard(numNumber * alignmentNum);
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
        必要おにぎり
      </Typography>
      <Typography
        sx={{
          fontWeight: "medium",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        {numNumber * alignmentNum}
      </Typography>
      <Tooltip title="ContentCopyIcon" onClick={handleClickButtonFullOnigiri}>
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
