import { useState, useContext } from "react";
import { Box } from "@mui/material";

import { numNumberTest } from "../../SettingUseContext";
import FullStack from "../parts/countOutput/FullStack";
import HarfStack from "../parts/countOutput/HarfStack";
import FullOnigiri from "../parts/countOutput/FullOnigiri";

export default function CountOutput(props: any) {
  // const numNumer = props.numNumer;
  const alignmentNum = props.alignmentNum;
  const numNumber = useContext(numNumberTest);

  // クリップボードにコピー
  const [openTip, setOpenTip] = useState<boolean>(false);

  // クリップボードにコピー
  async function copyToClipboard(num: any) {
    try {
      await navigator.clipboard.writeText(num);
    } catch (error) {
      console.log(error || "コピーに失敗しました");
    }
  }

  const handleClickButton = (): void => {
    setOpenTip(true);
    copyToClipboard(numNumber);
  };

  const handleClickButton2 = (): void => {
    setOpenTip(true);
    copyToClipboard(Math.ceil(numNumber / 2));
  };

  const handleClickButton3 = (): void => {
    setOpenTip(true);
    copyToClipboard(numNumber * alignmentNum);
  };

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <FullStack handleClickButton={handleClickButton} />
      <HarfStack handleClickButton2={handleClickButton2} />
      <FullOnigiri
        alignmentNum={alignmentNum}
        handleClickButton3={handleClickButton3}
      />
    </Box>
  );
}
