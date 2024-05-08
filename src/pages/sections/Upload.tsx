/* eslint-disable @typescript-eslint/no-explicit-any */ 
import React, { useEffect, useState } from 'react';
import { Container, Box, Button, Stack, Typography, CircularProgress } from '@mui/material';
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
  const [ loading, setLoading ] = useState(false)

  const [compressionSettings, setCompressionSettings] = useState({});
  const handleCompressionSettingsSubmit = async (settings: any) => {
    setCompressionSettings(settings);
  };
  
  useEffect(() => {
    const compressFileAsync = async () => {
      if (Object.keys(compressionSettings).length !== 0) {
        setLoading(true)
        const data = {
          jobId: dataReturned.jobId,
          ...compressionSettings
        };
        try {
          const result = await compressFile(data) as any;
          if( result.downloadUrl !== null ) { 
            setDownloadUrl(result.data.data.downloadUrl)
            setLoading(false)
          }
        } catch (error) {
          console.error('Error compressing file:', error);
        }
      }
    };
  
    compressFileAsync();
  }, [compressionSettings]);


  return (
    <Container>
      <Box paddingTop={4}>
        <Typography variant='h1' >Compress PDF</Typography>
        <Typography variant='body2' color={'text.secondary'}>PDF compressor to reduce the size of PDF files quickly and easily</Typography>
      </Box>
      <Box
        marginY={4}
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
          <Button LinkComponent={'a'} variant="contained" color="primary" target='_blank' href={downloadUrl} download>
            Download file
          </Button>
        ) : (
          droppedFile ? (
            loading ? (
              <CircularProgress />
            ) : (
              <Stack width={'100%'} direction={'row'} justifyContent={'space-evenly'} alignItems={'center'}> 
                <PDFViewer file={droppedFile} /> 
                <CompressionSettings onSubmit={handleCompressionSettingsSubmit} />
              </Stack>
            )
          ) : (
            <UploadBox setDroppedFile={setDroppedFile} setDataReturned={setDataReturned} />
          )
        )}
      </Box>
    </Container>
  );
};

export default Upload;
