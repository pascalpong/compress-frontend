import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Faq = () => {

    const details = [
        {
            title: 'Expanded by default',
            description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`
        },
        {
            title: 'Header',
            description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`
        }
    ]

    return (
        <Container>
            <Box paddingY={4}>
            {details.map((detail, index) => (
                <Accordion
                    key={index}
                    sx={{
                        borderStyle: 'solid',
                        border: 1,
                        borderColor: 'primary.main'
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{
                            borderStyle: 'solid',
                            borderRadius: 0,
                            borderLeft: 10,
                            borderBottom: 1,
                            borderColor: 'primary.main'
                        }}
                    >
                        <Typography>{detail.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{detail.description}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
            </Box>
        </Container>
    )
}

export default Faq;