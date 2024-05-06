/* eslint-disable @typescript-eslint/no-explicit-any */ 
import React, { useEffect, useState } from 'react';
import { Container, Box } from '@mui/material';
import UploadBox from '@/components/UploadBox';
import PDFViewer from '@/components/PDFViewer';
import CompressionSettings from '@/components/CompressionSettings';

const Upload = () => {

  const [droppedFile, setDroppedFile] = useState<File | null>(null);
  const [ dataReturned, setDataReturned ] = useState()

  const [compressionSettings, setCompressionSettings] = useState(null);
  const handleCompressionSettingsSubmit = (settings: any) => {
    setCompressionSettings(settings);
    
  };

  useEffect(() => {
    if(compressionSettings) {
      console.log(compressionSettings)
    }
  },[compressionSettings])

  useEffect(() => {
    if(dataReturned) { 
      
    }
  },[dataReturned])

  return (
    <Container>
      <Box
        border={1}
        borderRadius={2}
        p={3}
        textAlign="center"
      >
        {droppedFile ? (
          <>
            <PDFViewer file={droppedFile} />
            <CompressionSettings onSubmit={handleCompressionSettingsSubmit} />
          </>
        ) : (
          <UploadBox setDroppedFile={setDroppedFile} setDataReturned={setDataReturned} />
        )}
      </Box>
    </Container>
  );
};

export default Upload;
