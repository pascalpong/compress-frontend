import { Box, Typography, Rating, Stack, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



const LowerHeader = () => {

    const rating = {
        rating: 4.7,
        votes: 8166
    }

    const checks = ['Free', 'Online', 'No Limits']

  return (
    <Box
        sx={{
            py: 2,
            textAlign: 'center',
            bgcolor: 'primary.main',
            width: '100%', 
        }}
    >
        <Container>
            <Stack 
                height={'8rem'}
                spacing={{ xs: 1, sm: 2 }} 
                direction="row" 
                useFlexGap 
                flexWrap="wrap"
                justifyContent={'space-between'}
                alignItems={'end'}
            >
                <Stack 
                    direction="row" 
                    useFlexGap 
                    flexWrap="wrap" 
                    justifyContent={'start'} 
                    alignItems={'center'}
                >
                    <Rating name="half-rating" defaultValue={rating.rating} precision={0.1} />
                    <Typography variant="body2" color={'white'}><span>{rating.rating}</span> ({rating.votes})</Typography>
                </Stack> 
                <Stack 
                    direction="row" 
                    useFlexGap 
                    flexWrap="wrap" 
                    justifyContent={'start'} 
                    alignItems={'center'}
                >
                {checks.map((item, index) => (
                    <Stack 
                        key={index} 
                        direction="row"
                        alignItems="center"
                        sx={{ color: 'white' }}
                    >
                        <CheckCircleIcon/>
                        <Typography 
                            p={1} 
                            variant="body2"
                            color={'white'}
                        >
                            {item}
                        </Typography>
                    </Stack> 
                ))}
                </Stack>
            </Stack>
        </Container>
    </Box>
  );
};

export default LowerHeader;
