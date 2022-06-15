import { CheckBox } from "@mui/icons-material";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export const MuiCheckbox = () => {
  const [acceptTermsAndConditions, setAcceptTermsAndConditions] =
    React.useState(false);
  const [skills, setSkills] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTermsAndConditions(event.target.checked);
  };

  const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={
            <Checkbox
              checked={acceptTermsAndConditions}
              onChange={handleChange}
            />
          }
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTermsAndConditions}
          onChange={handleChange}
        />
      </Box>
      <FormControl>
        <FormLabel>Skills</FormLabel>
        <FormGroup row>
          <FormControlLabel
            label="HTML"
            control={
              <Checkbox
                value="html"
                checked={skills.includes("html")}
                onChange={handleSkillsChange}
              />
            }
          />
          <FormControlLabel
            label="CSS"
            control={
              <Checkbox
                value="css"
                checked={skills.includes("css")}
                onChange={handleSkillsChange}
              />
            }
          />
          <FormControlLabel
            label="JavaScript"
            control={
              <Checkbox
                value="javascript"
                checked={skills.includes("javascript")}
                onChange={handleSkillsChange}
              />
            }
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};
