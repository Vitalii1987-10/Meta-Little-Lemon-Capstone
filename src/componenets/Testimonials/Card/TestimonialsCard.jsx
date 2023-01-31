import { width } from '@mui/system'
import * as MUI from '../../../MUI'
import './TestimonialsCard.css'

const TestimonialsCard = ({ items }) => {
  return (
    <>
    {items.map((item) => {
      const {id, name, pic, rating} = item
      return (
        <MUI.Grid
          key={id}
          className='grid'
          item
          xl={3}
          lg={6}
          md={12}
          xs={12}
          sm={12}
          container
          justifyContent='center'
        >
          <MUI.Box
            sx={{
              height: 300,
              width: 250,
              borderRadius: 10,
              backgroundColor: '#EDEFEE',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
             }}
          >
            <MUI.Grid
            item
            xl={12}
            >
              <MUI.Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                sx={{
                  height: 100
                }}
              >
                <MUI.Typography
                  variant='h4'
                >
                  Rating
                </MUI.Typography>
              </MUI.Box>
              <MUI.Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                sx={{
                  height: 100,
                }}
              >
                <MUI.Box
                  sx={{
                    height: 100,
                    width: 100,
                  }}
                >
                  <MUI.Box 
                    component='img'
                    src={pic}
                    alt=''
                    sx={{
                      height: 100,
                      borderRadius: 3
                    }}
                  />
                </MUI.Box>
                <MUI.Box
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  sx={{
                    height: 100,
                    width: 100,
                  }}
                >
                  <MUI.Typography
                    sx={{
                      ml: 4
                    }}
                  >
                    {name}
                  </MUI.Typography>
                </MUI.Box>
              </MUI.Box>
              <MUI.Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                sx={{
                  height: 100
                }}
              >
                <MUI.Rating
                  name='read-only'
                  value={rating}
                  readOnly
                  size='large'
                />
              </MUI.Box>
            </MUI.Grid>
            {/* <MUI.Typography
              variant='h4'
              sx={{
                ml: 10,
              }}
            >
              Rating
            </MUI.Typography> */}
            {/* <MUI.Box
              sx={{
                display: 'flex',
              }}
            >
              <MUI.Box
                component='img'
                src={pic}
                alt=''
                sx={{
                  height: 120,
                  width: 120
                }}
              />
              <MUI.Box>
                <MUI.Typography
                  sx={{
                    mt: 6,
                    ml: 5
                  }}
                >
                  {name}
                </MUI.Typography>
              </MUI.Box>
            </MUI.Box> */}
            {/* <MUI.Typography>
              {rating}
            </MUI.Typography> */}
          </MUI.Box>
        </MUI.Grid>
      )
    })}
    </>
  )
}
export default TestimonialsCard