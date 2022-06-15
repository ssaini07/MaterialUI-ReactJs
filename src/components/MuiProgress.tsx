import { CircularProgress, Stack } from '@mui/material'
import React from 'react'

export const MuiProgress = () => {
  return (
    <Stack spacing={2}>
        <CircularProgress/>
        <CircularProgress color='success'/>
    </Stack>
  )
}
