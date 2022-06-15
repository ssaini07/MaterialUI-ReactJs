import { Box, FormControlLabel, Switch } from "@mui/material";
import React from "react";

export const MuiSwitch = () => {
  return (
    <Box>
      <FormControlLabel label="Dark mode" control={<Switch />} />
    </Box>
  );
};
