import { green } from '@mui/material/colors';
import * as MUI from '../../../MUI'
import '../Highlights.css'

const HighlightsCard = ( { items } ) => {
  return (
    <>
    {items.map((item) => {
      const { id, title, img, price, description} = item
      return (
        <MUI.Grid 
          key={id}
          className='grid' 
          item
          xl={4}
          lg={6}
          md={12}
          xs={12}
          sm={12}
          container
          justifyContent='center'
          // sx={{
          //   border: 1
          // }}
          >
          <MUI.Box 
            sx={{
              height: 450,
              width: 360,
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
                    height: 150,
                  }}
                >
                  <MUI.Box
                    component='img'
                    src={img}
                    alt=''
                    sx={{
                      height: 120,
                      width: 200,
                      borderRadius: 3
                    }}
                  />
                </MUI.Box>
                <MUI.Box
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  sx={{
                    height: 50,
                  }}
                >
                  <MUI.Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    sx={{
                      height: 50,
                      width: 180,
                      // border: 1
                    }}
                  >
                    {title}
                  </MUI.Box>
                  <MUI.Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    sx={{
                      height: 50,
                      width: 180,
                      // border: 1
                    }}
                  >
                    ${price}
                  </MUI.Box>
                </MUI.Box>
                <MUI.Box
                  display='flex'
                  justifyContent='center'
                  sx={{
                    height: 154,
                    mt: 2,
                  }}
                >
                  <MUI.Box
                    display='flex'
                    justifyContent='center'
                    sx={{
                      height: 174,
                      width: 300,
                    }}
                  >
                    {description}
                  </MUI.Box>
                </MUI.Box>
                <MUI.Box
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  sx={{
                    height: 80,

                  }}
                >
                  <MUI.Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    sx={{
                      height: 50,
                      width: 230,
                    }}
                  >
                    <MUI.Button
                      variant='outlined'
                      sx={{
                        backgroundColor: '#F4CE14', 
                        color: '#333333', 
                        borderRadius: 4, 
                        minHeight: 50,
                        fontSize: 12,
                        ':hover': {
                          bgcolor: '#333333', 
                          color: '#EDEFEE',
                          borderColor: '#333333'
                        }
                      }}
                      >
                        Order a delivery
                    </MUI.Button>
                  </MUI.Box>
                  <MUI.Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    sx={{
                      height: 50,
                      width: 130,
                      // border: 1
                    }}
                  >
                    <MUI.DirectionsBikeIcon
                      sx={{
                        color: green[500]
                      }}
                    />
                  </MUI.Box>
                </MUI.Box>
              </MUI.Grid>
          </MUI.Box>
        </MUI.Grid>
        )
    })}
    </>
  );


}
export default HighlightsCard