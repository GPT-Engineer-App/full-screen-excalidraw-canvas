import React from 'react';
import { Box } from '@chakra-ui/react';
import { Excalidraw } from '@excalidraw/excalidraw';

const FullscreenCanvas = () => {
  return (
    <Box width="100vw" height="100vh">
      <Excalidraw />
    </Box>
  );
};

export default FullscreenCanvas;