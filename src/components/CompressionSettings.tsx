import React, { useState } from 'react';
import { Box, TextField, Typography, FormControl, Select, MenuItem, Button } from '@mui/material';

interface CompressionSettingsProps {
  onSubmit: (settings: CompressionSettings) => void;
}

export interface CompressionSettings {
  dpi: number;
  quality: number;
  colorMode: 'color' | 'greyscale';
}

const CompressionSettings: React.FC<CompressionSettingsProps> = ({ onSubmit }) => {
  const [dpi, setDpi] = useState<number>(300);
  const [quality, setQuality] = useState<number>(80);
  const [colorMode, setColorMode] = useState<'color' | 'greyscale'>('color');

  const handleSubmit = () => {
    onSubmit({ dpi, quality, colorMode });
  };

  return (
    <Box>
      <Typography variant="h6">Compression Settings</Typography>
      <Box mt={2}>
        <TextField
          label="DPI"
          type="number"
          value={dpi}
          onChange={(e) => setDpi(parseInt(e.target.value))}
          fullWidth
        />
      </Box>
      <Box mt={2}>
        <TextField
          label="Quality (0-100)"
          type="number"
          value={quality}
          onChange={(e) => setQuality(parseInt(e.target.value))}
          fullWidth
        />
      </Box>
      <Box mt={2}>
        <FormControl fullWidth>
          <Select
            value={colorMode}
            onChange={(e) => setColorMode(e.target.value as 'color' | 'greyscale')}
            displayEmpty
            fullWidth
          >
            <MenuItem value="color">Color</MenuItem>
            <MenuItem value="greyscale">Greyscale</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Apply Settings
        </Button>
      </Box>
    </Box>
  );
};

export default CompressionSettings;
