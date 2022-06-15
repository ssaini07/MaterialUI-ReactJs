import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";

export const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React is javascript library for building user interfaces. React can
            be used as a base in the development of single- page or mobile
            applications.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
