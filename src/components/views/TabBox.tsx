import React from "react";
import { Box, Tabs, Tab } from "@mui/material";

export default function TabBox(props: any) {
  const tabValue = props.tabValue;
  const tabChange = props.tabChange;

  function tabMenu(index: number): object {
    return {
      id: `tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        value={tabValue}
        onChange={tabChange}
        aria-label="basic tabs example"
      >
        <Tab label="城戦" {...tabMenu(0)} />
        <Tab label="test" {...tabMenu(1)} disabled />
        <Tab label="おにぎり表" {...tabMenu(2)} disabled />
      </Tabs>
    </Box>
  );
}
