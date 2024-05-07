/* eslint-disable @typescript-eslint/no-explicit-any */ 
import { Box, Typography } from '@mui/material';
import { useFileUploadMutation } from '@/api/uploadService'; 

interface UploadBoxProps {
  setDroppedFile: React.Dispatch<React.SetStateAction<File | null>>;
  setDataReturned: React.Dispatch<any>
}

const UploadBox: React.FC<UploadBoxProps> = ({ setDroppedFile, setDataReturned }) => {

  const [fileUpload] = useFileUploadMutation();

  const manageFile = async (file: any) => {

    if (file.type !== 'application/pdf') {
      console.error('Only PDF files are allowed.');
      return;
    }
    
    const fileId = Date.now().toString(16);
    const fileName = `upload_${fileId}.pdf`;
    const fileSize = file.size;
    const uploadTime = new Date().toISOString();
    const backendUrl = process.env.NEXT_PUBLIC_API_URL;

    const data = [{
      file: fileName,
      size: fileSize,
      ctime: uploadTime,
      host: backendUrl
    }];

    try {
        const details = await fileUpload({data, file}) as any; 
        setDataReturned({data: details.data.data, jobId:details.data.jobId })
        setDroppedFile(file);
    } catch (error) {
        console.log(error)
    } 
  }

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    manageFile(file);
  };

  const handleDragOver = (event: any) => {
      event.preventDefault();
  };

  const handleFileChange = (event: any) => {
      const file = event.target.files[0];
      manageFile(file);
  };

    return (
        
        <Box
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          sx={{ cursor: 'pointer' }}
        >
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="fileInput"
          />
          <label htmlFor="fileInput">
            <Typography variant="h5" color={'text.secondary'}>Drag and Drop PDF File Here</Typography>
            <Typography variant="body1" color="text.secondary" mt={2}>
                Or click to browse your files
            </Typography>
          </label>
        </Box>
    )
}

export default UploadBox;