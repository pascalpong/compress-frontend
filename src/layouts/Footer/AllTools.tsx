import { Box, Container, Stack, Typography } from "@mui/material";


const AllTools = () => {
    
    const services = [
        'Merge PDF', 'Split PDF', 'Compress PDF', 'Edit PDF', 'Sign PDF', 'PDF Converter', 
        'Convert to PDF', 'Images to PDF', 'PDF to Images', 'Extract PDF Images', 'Protect PDF', 
        'Unlock PDF', 'Rotate PDF pages', 'Remove PDF pages', 'Extract PDF pages', 'Sort PDF pages', 
        'Webpage to PDF', 'Create PDF job application', 'Create PDF with camera', 'PDF OCR', 'Add watermark', 
        'Add page numbers', 'View as PDF', 'PDF Overlay', 'Compare PDFs', 'Web optimize PDF', 'Annotate PDF', 
        'Redact PDF', 'Create PDF', 'PDF 24 Creator', 'PDF Printer', 'PDF Reader', 'Create invoice', 
        'Remove PDF metadata', 'Flatten PDF', 'Crop PDF'
    ];

    const perColumn = 7;
    const columns = Math.ceil(services.length / perColumn);

    return (
        <Container>
            <Stack 
            direction="row"
            sx={{ 
                top: 'auto', 
                bottom: 20,
            }} 
            justifyContent={'space-between'}
            >
            {Array.from({ length: columns }).map((_, index) => (
            <Box
                paddingX={2}
                width={10}
                key={index}
                borderRight={1}
                borderColor={'#C1C1C1'}
                flexGrow={1}
                sx={{ display: 'flex', flexDirection: 'column' }}
            >
                {services.slice(index * perColumn, (index + 1) * perColumn).map((service, idx) => (
                <Typography key={idx} sx={{ marginBottom: idx === perColumn - 1 ? 0 : 1 }}>
                    {service}
                </Typography>
                ))}
            </Box>
            ))}
            </Stack>
        </Container>
    )
}

export default AllTools;