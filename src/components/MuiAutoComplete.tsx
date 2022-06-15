import { Stack, Autocomplete, TextField } from "@mui/material";
import React from "react";

export const MuiAutoComplete = () => {
  const skills = [
    "Python",
    "Android",
    "IOS",
    "Reactjs",
    "Angular",
    "Data Science",
  ];
  return (
    <Stack width="200px">
      {/* This <Autocomplete> field has two mandatory props one is options and second one is renderInput which
        renders the input */}
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
      />
    </Stack>
  );
};
