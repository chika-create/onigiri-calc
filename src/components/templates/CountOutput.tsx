import React from "react";
import { Box } from "@mui/material";

import FullStack from "../parts/countOutput/FullStack";
import FullOnigiri from "../parts/countOutput/FullOnigiri";

export default function CountOutput() {
  // クリップボードにコピー
  async function copyToClipboard(num: number | string) {
    try {
      await navigator.clipboard.writeText(num.toString());
    } catch (error) {
      console.log(error || "コピーに失敗しました");
    }
  }

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <FullOnigiri copyToClipboard={copyToClipboard} />
      <FullStack copyToClipboard={copyToClipboard} />
    </Box>
  );
}
