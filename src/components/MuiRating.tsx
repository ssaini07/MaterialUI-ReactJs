import { Box, Stack, Rating } from "@mui/material";
import React from "react";

export const MuiRating = () => {
  const [value, setValue] = React.useState<number | null>(null);
  console.log({ value });

  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating value={value} onChange={handleChange} precision={0.5} highlightSelectedOnly/>
      {/* highlightSelectedOnly prop highlight only one icon*/}
      <Rating value={value} onChange={handleChange} precision={0.5} readOnly/>
      {/* Here readOnly prop will show only highlighted rating*/}
    </Stack>
  );
};
