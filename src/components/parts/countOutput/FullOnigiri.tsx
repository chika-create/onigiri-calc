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

export default function FullStack({ copyToClipboard, selectCastleKind2 }: any) {
  const stackNumber = useContext(stackNumberContext);
  const alignmentNumbers: AlignmentNumbersType = useContext(
    alignmentNumbersContext
  );

  const selectCastleKind: string = useContext(selectCastleKindContext);
  const castleAlignmentNumber: number =
    alignmentNumbers[selectCastleKind as keyof AlignmentNumbersType];
  console.log("castleAlignmentNumber: ", castleAlignmentNumber);

  const fullOnigiriNumber = stackNumber * castleAlignmentNumber;

  const [openTip, setOpenTip] = useState<boolean>(false);
  const handleClickButtonFullOnigiri = (): void => {
    setOpenTip(true);
    copyToClipboard(fullOnigiriNumber);
  };

  const castleAlignmentNumber2: number =
    alignmentNumbers[selectCastleKind2 as keyof AlignmentNumbersType];

  // let selectCastleKindNumber2 = 0;
  // if (selectCastleKind2 == "gold") {
  //   selectCastleKindNumber2 = 3;
  // } else if (selectCastleKind2 == "blue") {
  //   selectCastleKindNumber2 = 2;
  // } else {
  //   selectCastleKindNumber2 = 1;
  // }
  const fullOnigiriNumber2 = stackNumber * castleAlignmentNumber2;

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
        <br />
        {fullOnigiriNumber2}
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
