import { useContext } from "react";
import {
  stackNumberContext,
  alignmentNumbersContext,
  selectCastleKindContext,
} from "../../../context/SettingUseContext";

import { copyToClipboardData, alignmentListData } from "../../../types/types";

import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function FullOnigiri({ copyToClipboard }: copyToClipboardData) {
  const stackNumber = useContext(stackNumberContext);
  const selectCastleKind: string = useContext(selectCastleKindContext);
  const alignmentNumbers: alignmentListData = useContext(
    alignmentNumbersContext
  );

  const castleAlignmentNumber: number =
    alignmentNumbers[selectCastleKind as keyof alignmentListData];
  const fullOnigiriNumber = stackNumber * castleAlignmentNumber;

  const handleClickButtonFullOnigiri = (): void => {
    copyToClipboard(fullOnigiriNumber);
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
        {fullOnigiriNumber}
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
