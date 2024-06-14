import React, { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { Excalidraw, exportToCanvas, exportToSvg, exportToBlob } from '@excalidraw/excalidraw';

const FullscreenCanvas = () => {
  const excalidrawRef = useRef(null);

  useEffect(() => {
    if (excalidrawRef.current) {
      const textElement = {
        type: 'text',
        version: 1,
        versionNonce: 123456,
        isDeleted: false,
        id: 'text-element',
        fillStyle: 'hachure',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: 100,
        y: 100,
        strokeColor: '#000000',
        backgroundColor: 'transparent',
        width: 200,
        height: 50,
        seed: 1968410350,
        groupIds: [],
        strokeSharpness: 'sharp',
        boundElementIds: [],
        fontSize: 20,
        fontFamily: 1,
        text: 'Please draw in me!',
        baseline: 18,
        textAlign: 'left',
        verticalAlign: 'top',
      };

      excalidrawRef.current.updateScene({
        elements: [textElement],
        appState: {},
        commitToHistory: true,
      });
    }
  }, []);
  return (
    <Box width="100vw" height="100vh">
      <Excalidraw ref={excalidrawRef} />
    </Box>
  );
};

export default FullscreenCanvas;