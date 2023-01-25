import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import pic from '../../assets/Avatar.png'
import './Hero.css'

const Hero = () => {
  return (
    <>
      <Box className='background' sx={{
        color: '#495E57',
        width: 1,
        height: 500,
      }}>
        <Typography 
          variant='h1' 
          component='h2'
          sx={{
            ml: 25, 
            color: '#F4CE14',
          }} 
        >
          Little Lemon
        </Typography>
        <Typography 
          variant='h2' 
          component='h3'
          sx={{
            ml: 25, 
            color: '#EDEFEE'
          }} 
        >
          Chicago
        </Typography>
        <Typography 
          variant='body1' 
          component='p'
          sx={{
            ml: 26, 
            color: '#EDEFEE', 
            maxWidth: 200
          }} 
        >
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </Typography>
        <Button 
          variant='outlined'
          sx={{
            ml: 26, 
            backgroundColor: '#F4CE14', 
            color: '#333333', 
            mt: 4, 
            borderRadius: 4, 
            minHeight: 50,
            fontSize: 16,
          }} 
          >
          Reserve a table
          </Button>
          <Box 
            justifyContent={'center'}
            sx={{
              position: 'absolute', 
              left: 810,
              // top: -370
              top: 100
            }}
          >
            <img className='heroPic' src={pic} alt="" />
          </Box>
      </Box>
    </>
  )
}
export default Hero