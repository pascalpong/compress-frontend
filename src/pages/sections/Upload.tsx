/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useFileUploadMutation, useGetUploadQuery } from "@/api/uploadService";
import PDFViewer from '../../components/PDFViewer';




const Upload = () => {

    const [droppedFile, setDroppedFile] = useState<File | null>(null);

    const getUpload = useGetUploadQuery({});
    useEffect(() => {
    },[getUpload])

    const [ fileUpload ] = useFileUploadMutation();

    const [isDragging, setIsDragging] = useState(false);

    const handleDragEnter = (event: any) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = async (event: any) => {
        event.preventDefault();
        setIsDragging(false);       
    
        const file = event.dataTransfer.files[0]; 
        if (file.type !== 'application/pdf') {
            // Display an error message or handle the case where the dropped file is not a PDF
            console.error('Only PDF files are allowed.');
            return;
        }
    
        await fileUpload(file);
        setDroppedFile(file);
    };

    const handleDragOver = (event: any) => {
        event.preventDefault();
    };

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        // Process the selected file (e.g., upload it)
        console.log("Selected file:", file);
    };

    return (
        <Container>
            <Box
                border={1}
                borderRadius={2}
                borderColor={isDragging ? "primary.main" : "text.secondary"}
                p={3}
                textAlign="center"
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                sx={{ cursor: "pointer" }}
            >
                <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                    id="fileInput"
                />
                <label htmlFor="fileInput">
                    <Typography variant="h5">Drag and Drop PDF File Here</Typography>
                    <Typography variant="body1" color="text.secondary" mt={2}>
                        Or click to browse your files
                    </Typography>
                </label>
            </Box>
            <PDFViewer file={droppedFile} />
        </Container>
    );
};

export default Upload;
