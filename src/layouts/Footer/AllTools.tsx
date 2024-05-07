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
            <Box borderTop={'solid 2px'} borderColor={'primary.main'} padding={2}>
                <Box marginBottom={2}>
                    <Typography variant="h6" fontWeight={700}>All Tolls</Typography>
                </Box>
                <Stack 
                    direction="row"
                    marginBottom={10} 
                    justifyContent={'space-between'}
                >
                {Array.from({ length: columns }).map((_, index) => (
                <Box
                    paddingLeft={2}
                    width={10}
                    key={index}
                    borderLeft={1}
                    borderColor={'#C1C1C1'}
                    flexGrow={1}
                    sx={{ display: 'flex', flexDirection: 'column' }}
                >
                    {services.slice(index * perColumn, (index + 1) * perColumn).map((service, idx) => (
                    <Typography variant="body2" key={idx} sx={{ marginBottom: idx === perColumn - 1 ? 0 : 1 }}>
                        {service}
                    </Typography>
                    ))}
                </Box>
                ))}
                </Stack>
            </Box>
        </Container>
    )
}

export default AllTools;