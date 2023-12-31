import React from "react";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import BreakdownChart from "components/BreakdownChart";

const Breakdown = () => {
  return (
    <Box margin={"1.5rem 2.5rem"}>
      <Header title={"BREAKDOWN"} subtitle={"Breakdown of Sales"} />
      <Box mt={"40px"} height="75vh">
        <BreakdownChart />
      </Box>
    </Box>
  );
};

export default Breakdown;
