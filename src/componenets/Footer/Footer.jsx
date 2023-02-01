import * as MUI from '../../MUI'
import img from '../../assets/Avatar.png'

const Footer = () => {
  return (
    <div style={{backgroundColor: "#495E57"}}>
      <MUI.Box 
        display='flex'
        justifyContent='center'
        sx={{
          flexGrow: 1, 
          mt: 10, 
        }}
        >
        <MUI.Grid maxWidth='xl' container spacing={2}>
              <MUI.Grid
                item
                xl={4}
                lg={4}
                md={12}
                xs={12}
                sm={12}
                container
                justifyContent='center'
              >
                <MUI.Box
                  sx={{
                    height: 150,
                    // border: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <MUI.Typography
                    variant='h5'
                    sx={{
                      color: '#EDEFEE', 
                    }}
                  >
                    Contact
                  </MUI.Typography>
                  <MUI.Typography
                    variant='body1'
                    sx={{
                      color: '#EDEFEE', 
                    }}
                  >
                    Address:
                  </MUI.Typography>
                  <MUI.Typography
                    variant='body1'
                    sx={{
                      color: '#EDEFEE', 
                    }}
                  >
                    Phone: 
                  </MUI.Typography>
                  <MUI.Typography
                    variant='body1'
                    sx={{
                      color: '#EDEFEE', 
                    }}
                  >
                    Email: 
                  </MUI.Typography>
                </MUI.Box>
              </MUI.Grid>
              <MUI.Grid
                item
                xl={4}
                lg={4}
                md={12}
                xs={12}
                sm={12}
                container
                justifyContent='center'
              >
                <MUI.Box
                  sx={{
                    height: 150,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <MUI.Typography
                    variant='h5'
                    sx={{
                      color: '#EDEFEE', 
                    }}
                  >
                    Social Media
                  </MUI.Typography>
                  <MUI.Box>
                    <MUI.FacebookIcon 
                      sx={{
                        mr: 5,
                        color: '#EDEFEE', 
                      }}
                    />
                    <MUI.InstagramIcon 
                      sx={{
                        mr: 5,
                        color: '#EDEFEE', 
                      }}
                    />
                    <MUI.TwitterIcon 
                      sx={{
                        mr: 5,
                        color: '#EDEFEE', 
                      }}
                    />
                  </MUI.Box>
                </MUI.Box>
              </MUI.Grid>
              <MUI.Grid
                item
                xl={4}
                lg={4}
                md={12}
                xs={12}
                sm={12}
                sx={{
                }}
                container
                justifyContent='center'
              >
                <MUI.Box
                  component='img'
                  src={img}
                  alt=''
                  sx={{
                    height: 150,
                    width: 150,
                    borderRadius: 3
                }}
                />
              </MUI.Grid>
        </MUI.Grid>
      </MUI.Box>
    </div>
  )
}
export default Footer