import React from "react";
import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">This is h1 heading</Typography>
      <Typography variant="h2">This is h2 heading</Typography>
      <Typography variant="h3">This is h3 heading</Typography>
      <Typography variant="h4" gutterBottom>
        This is h4 heading
      </Typography>
      {/* gutterbottom is basically used for to give little margin down */}
      <Typography variant="h5">This is h5 heading</Typography>
      <Typography variant="h6">This is h6 heading</Typography>
    </div>
  );
};
