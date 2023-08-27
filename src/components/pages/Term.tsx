import React from "react";
import { Box, Typography } from "@mui/material";
import TitleH1 from "../parts/typography/TitleH1";
import TitleH2 from "../parts/typography/TitleH2";
import Text from "../parts/typography/Text";

function Term() {
  return (
    <Box>
      <TitleH1 text="利用規約" />
      <TitleH2 text="小見出し" />
      <Text text="ここに利用規約の内容を書く" />
    </Box>
  );
}

export default Term;
