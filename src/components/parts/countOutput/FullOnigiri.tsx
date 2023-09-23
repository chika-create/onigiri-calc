import { useState, useContext } from "react";
import {
  numNumberContext,
  alignmentNumContext,
  alignmentNumContext2,
  selectCastleKindContext,
} from "../../../SettingUseContext";

import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// alignmentNum2 の型をアノテーション
type AlignmentNum2Type = {
  red: number;
  blue: number;
  gold: number;
};

export default function FullStack(props: any) {
  const numNumber = useContext(numNumberContext);
  const alignmentNum = useContext(alignmentNumContext);
  const alignmentNum2: AlignmentNum2Type = useContext(alignmentNumContext2);
  const selectCastleKind: string = useContext(selectCastleKindContext);
  const copyToClipboard = props.copyToClipboard;
  const [openTip, setOpenTip] = useState<boolean>(false);

  const alignmentNum3: number =
    alignmentNum2[selectCastleKind as keyof AlignmentNum2Type];

  // console.log("selectCastleKind: ", selectCastleKind);
  // console.log("alignmentNum2[red]: ", alignmentNum2["red"]);

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
