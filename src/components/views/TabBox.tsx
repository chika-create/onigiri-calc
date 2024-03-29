import { Box, Tab } from "@mui/material";
import { TabList } from "@mui/lab";

import { TabBoxProps } from "../../types/types";

export default function TabBox({ tabToChange }: TabBoxProps) {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <TabList onChange={tabToChange}>
        <Tab label="城戦" value="1" />
        <Tab label="使い方" value="2" />
        {/* <Tab label="おにぎり表" value="3" /> */}
      </TabList>
    </Box>
  );
}
