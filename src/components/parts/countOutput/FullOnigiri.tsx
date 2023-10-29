import { useState, useContext } from "react";
import {
  numNumberContext,
  alignmentNumbersContext,
  selectCastleKindContext,
} from "../../../SettingUseContext";

import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// alignmentNumbers の型をアノテーション
type AlignmentNumbersType = {
  red: number;
  blue: number;
  gold: number;
};

export default function FullStack(props: any) {
  const numNumber = useContext(numNumberContext);
  const alignmentNumbers: AlignmentNumbersType = useContext(
    alignmentNumbersContext
  );
  const selectCastleKind: string = useContext(selectCastleKindContext);
  const copyToClipboard = props.copyToClipboard;
  const [openTip, setOpenTip] = useState<boolean>(false);

  const castleAlignmentNumber: number =
    alignmentNumbers[selectCastleKind as keyof AlignmentNumbersType];

  const handleClickButtonFullOnigiri = (): void => {
    setOpenTip(true);
    copyToClipboard(numNumber * castleAlignmentNumber);
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
        {numNumber * castleAlignmentNumber}
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
