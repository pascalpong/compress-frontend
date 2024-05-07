import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; 
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import TuneIcon from '@mui/icons-material/Tune';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import DesktopWindowsRoundedIcon from '@mui/icons-material/DesktopWindowsRounded';
import CloudQueueRoundedIcon from '@mui/icons-material/CloudQueueRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
 

const Information = () => {
    
    const checks = ['Windows', 'Linux', 'MAC', 'iPhone', 'Android']
    const details = [
        {
            title: 'How to compress PDF files',
            description: 'Select your PDF files which you would like to compress or drop them into the file box and start the compression. A few seconds later you can download your compressed PDF files.',
            logo: <ZoomInMapIcon color="primary"/>
        },
        {
            title: 'Adjustable quality',
            description: 'You can adjust the compression quality so that you can tune the compression algorithm in order to get a perfect result. PDF files with images can be compressed better than PDF files with text only.',
            logo: <TuneIcon color="primary"/>
        },
        {
            title: 'Easy to use',
            description: `PDF24 makes it as easy and fast as possible for you to compress your files. You don't need to install any software, you only have to select your files and start the compression.`,
            logo: <StarOutlineRoundedIcon color="primary"/>
        },
        {
            title: 'Runs on your system',
            description: 'The compression tool does not need any special system in order to compress your PDF files. The app is browser based and works under all operating systems.',
            logo: <DesktopWindowsRoundedIcon color="primary"/>
        },
        {
            title: 'No installation required',
            description: 'You do not need to download and install any software. PDF files are compressed in the cloud on our servers. The app does not consume your system resources.',
            logo: <CloudQueueRoundedIcon color="primary"/>
        },
        {
            title: 'Secure online compression',
            description: 'The compression tool does not keep your files longer than necessary on our server. Your files and results will be deleted from our server after a short period of time.',
            logo: <LockOutlinedIcon color="primary"/>
        },
    ]


    return (
        <Box sx={{ bgcolor:'secondary.main' }} padding={4}>
            <Container>
                <Stack 
                    spacing={{ xs: 1, sm: 2 }} 
                    direction="column"  
                    alignItems={'center'}
                >
                    <Box>
                        <Typography variant="h2" textAlign={'center'}  color={'text.secondary'}>Information</Typography>
                        <Stack
                            direction="row"
                            spacing={{ xs: 1, sm: 2 }}
                            padding={1}
                            sx={{
                                borderRadius: 100,
                                bgcolor: 'white',
                            }}  
                        >
                        {checks.map((item, index) => (
                            <Stack 
                                key={index} 
                                direction="row"
                                alignItems="center"
                                color={'primary.main'}
                            >
                                <CheckCircleOutlineIcon/>
                                <Typography 
                                    p={1} 
                                    variant="body2"
                                    color={'text.secondary'}
                                >
                                    {item}
                                </Typography>
                            </Stack> 
                        ))}
                        </Stack>
                    </Box>
                    <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={{ xs: 1, md: 2 }}>
                    {details.map((detail, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}
                            display="flex"
                            alignItems="center"
                            justifyContent={'center'}
                            alignContent={'space-between'}
                        >
                            <Box
                                key={index}
                                height={'175px'}
                                width={'100%'}
                                my={4}
                                gap={4}
                                p={2}
                                sx={{ border: '1px solid', borderColor: 'secondary.dark', borderRadius: 2 }}
                            >
                                <Stack
                                    height={'50%'}
                                    direction={'row'}
                                    justifyContent={'space-between'}
                                >
                                    <Typography variant="h6" fontWeight={700} color={'text.secondary'}>{detail.title}</Typography>
                                    <>{detail.logo}</>
                                </Stack>
                                <Typography variant="body2" color={'text.secondary'}>{detail.description}</Typography>
                            </Box> 
                        </Grid>
                    ))}
                    </Grid>
                </Stack>
            </Container>
        </Box>
    )
}

export default Information;