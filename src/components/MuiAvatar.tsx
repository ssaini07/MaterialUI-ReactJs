import { Avatar, AvatarGroup, Stack } from "@mui/material";
import React from "react";

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>SS</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>HH</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/51.jpg"
            alt="Jane Doe"
          />
          <Avatar sx={{ bgcolor: "primary.light" }}>DD</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>AA</Avatar>
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light", width: 48, height: 48 }}>
          SS
        </Avatar>
        <Avatar sx={{ bgcolor: "success.light", width: 48, height: 48 }}>
          HH
        </Avatar>
      </Stack>
    </Stack>
  );
};
