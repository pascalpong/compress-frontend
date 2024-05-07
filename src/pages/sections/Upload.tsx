/* eslint-disable @typescript-eslint/no-explicit-any */ 
import React, { useEffect, useState } from 'react';
import { Container, Box, Button } from '@mui/material';
import UploadBox from '@/components/UploadBox';
import PDFViewer from '@/components/PDFViewer';
import CompressionSettings from '@/components/CompressionSettings';
import { useFileCompressMutation } from '@/api/uploadService';

const Upload = () => {

  const [droppedFile, setDroppedFile] = useState<File | null>(null);
  const [ dataReturned, setDataReturned ] = useState({
    data: {},
    jobId: null
  })
  const [ compressFile ] = useFileCompressMutation();
  const [ downloadUrl, setDownloadUrl ] = useState(null)

  const [compressionSettings, setCompressionSettings] = useState({});
  const handleCompressionSettingsSubmit = async (settings: any) => {
    setCompressionSettings(settings);
  };
  
  useEffect(() => {
    const compressFileAsync = async () => {
      if (Object.keys(compressionSettings).length !== 0) {
        console.log(compressionSettings);
        const data = {
          jobId: dataReturned.jobId,
          ...compressionSettings
        };
        try {
          const result = await compressFile(data) as any;
          if( result.downloadUrl !== null ) { 
            setDownloadUrl(result.data.data.downloadUrl) 
          }
          // Handle result if needed
        } catch (error) {
          console.error('Error compressing file:', error);
        }
      }
    };
  
    compressFileAsync();
  }, [compressionSettings]);


  return (
    <Container>
      <Box
        margin={4}
        border={'dashed'}
        borderRadius={2}
        borderColor={'primary.main'}
        height={'300px'}
        p={3}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        textAlign="center"
        sx={{
          backgroundColor:'primary.light'
        }}
      >
        { downloadUrl !== null ? ( 
          <Button variant="contained" color="primary" href={downloadUrl} download>
            Download file
          </Button>
        ) : (
          droppedFile ? (
            <> 
              <PDFViewer file={droppedFile} /> 
              <CompressionSettings onSubmit={handleCompressionSettingsSubmit} />
            </>
          ) : (
            <UploadBox setDroppedFile={setDroppedFile} setDataReturned={setDataReturned} />
          )
        )}
      </Box>
    </Container>
  );
};

export default Upload;
