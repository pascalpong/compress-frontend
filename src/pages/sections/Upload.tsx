import { Container, Typography, Box } from "@mui/material";
import { useState } from "react";

const Upload = () => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragEnter = (event: any) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (event: any) => {
        event.preventDefault();
        setIsDragging(false);
        const file = event.dataTransfer.files[0];
        // Process the dropped file (e.g., upload it)
        console.log("Dropped file:", file);
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
        </Container>
    );
};

export default Upload;
