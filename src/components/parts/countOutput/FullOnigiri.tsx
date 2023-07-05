import { useContext } from "react";
import { numNumber } from "../../../SettingUseContext";

import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function FullStack(props: any) {
  // const numNumer = props.numNumer;
  const numNumer = useContext(numNumber);
  const alignmentNum = props.alignmentNum;
  const handleClickButton3 = props.handleClickButton3;

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
        }}
      >
        {numNumer * alignmentNum}
      </Typography>
      <Tooltip title="ContentCopyIcon" onClick={handleClickButton3}>
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
