import * as MUI from '../../MUI'
import pic from '../../assets/Avatar.png'
import './Hero.css'
import { padding } from '@mui/system'

const Hero = () => {
  return (
    <div className='background'>
      <MUI.Container maxWidth="xl">
        <MUI.Grid container spacing={0} sx={{paddingLeft: 0}}>
          <MUI.Grid
            item
            xl={6}
            lg={6}
            md={12}
            xs={12}
            sm={12}
          >
            <MUI.Box
              sx={{
                height: 480,
              }}
            >
              <MUI.Typography 
                variant='h1' 
                component='h2'
                sx={{
                  color: '#F4CE14',
                }} 
              >
                Little Lemon
              </MUI.Typography>
              <MUI.Typography 
                variant='h2' 
                component='h3'
                sx={{
                  color: '#EDEFEE'
                }} 
              >
                Chicago
              </MUI.Typography>
              <MUI.Typography 
                variant='body1' 
                component='p'
                sx={{
                  color: '#EDEFEE', 
                  maxWidth: 300,
                  fontSize: 20,
                }} 
              >
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
              </MUI.Typography>
              <MUI.Button 
                variant='outlined'
                sx={{
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
            </MUI.Box>
          </MUI.Grid>
          <MUI.Grid
            item
            xl={6}
            lg={6}
            md={12}
            xs={12}
            sm={12}
            // sx={{border: 1}}
          >
            <MUI.Box
            display='flex'
            justifyContent='center'
              sx={{
                height: 480,
                // border: 1
              }}
            >
              <img className='heroPic' src={pic} alt="" />
            </MUI.Box>
          </MUI.Grid>
        </MUI.Grid>

        {/* <MUI.Box className='background'>
            <MUI.Box 
              justifyContent={'center'}
              sx={{
                position: 'relative', 
                left: 770,
                top: -370
              }}
            >
              <img className='heroPic' src={pic} alt="" />
            </MUI.Box>
        </MUI.Box> */}
      </MUI.Container>
    </div>
  )
}
export default Hero