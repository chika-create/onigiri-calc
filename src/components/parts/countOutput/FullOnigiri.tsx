import { useState, useContext } from "react";
import {
  stackNumberContext,
  alignmentNumbersContext,
  selectCastleKindContext,
} from "../../../context/SettingUseContext";

import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// alignmentNumbers の型をアノテーション
type AlignmentNumbersType = {
  red: number;
  blue: number;
  gold: number;
};

export default function FullStack({ copyToClipboard }: any) {
  const [openTip, setOpenTip] = useState<boolean>(false);
  const stackNumber = useContext(stackNumberContext);
  const selectCastleKind: string = useContext(selectCastleKindContext);
  const alignmentNumbers: AlignmentNumbersType = useContext(
    alignmentNumbersContext
  );

  const castleAlignmentNumber: number =
    alignmentNumbers[selectCastleKind as keyof AlignmentNumbersType];
  const fullOnigiriNumber = stackNumber * castleAlignmentNumber;

  const handleClickButtonFullOnigiri = (): void => {
    setOpenTip(true);
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
