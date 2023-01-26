import * as MUI from '../../MUI'
import pic from '../../assets/Avatar.png'
import Container from '@mui/material/Container';
import './Hero.css'

const Hero = () => {
  return (
    <div className='background'>
      <MUI.Container maxWidth="xl">
        <MUI.Box className='background'>
          <MUI.Typography 
            variant='h1' 
            component='h2'
            sx={{
              ml: 22, 
              color: '#F4CE14',
            }} 
          >
            Little Lemon
          </MUI.Typography>
          <MUI.Typography 
            variant='h2' 
            component='h3'
            sx={{
              ml: 22, 
              color: '#EDEFEE'
            }} 
          >
            Chicago
          </MUI.Typography>
          <MUI.Typography 
            variant='body1' 
            component='p'
            sx={{
              ml: 22, 
              color: '#EDEFEE', 
              maxWidth: 200
            }} 
          >
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </MUI.Typography>
          <MUI.Button 
            variant='outlined'
            sx={{
              ml: 22, 
              backgroundColor: '#F4CE14', 
              color: '#333333', 
              mt: 4, 
              borderRadius: 4, 
              minHeight: 50,
              fontSize: 16,
              ':hover': {
                bgcolor: '#333333', 
                color: '#EDEFEE',
                borderColor: '#333333'
              }
            }} 
            >
            Reserve a table
            </MUI.Button>
            <MUI.Box 
              justifyContent={'center'}
              sx={{
                position: 'relative', 
                left: 770,
                top: -350
              }}
            >
              <img className='heroPic' src={pic} alt="" />
            </MUI.Box>
        </MUI.Box>
      </MUI.Container>
    </div>
  )
}
export default Hero