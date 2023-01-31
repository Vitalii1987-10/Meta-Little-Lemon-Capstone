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
          lg={4}
          md={12}
          xs={12}
          sm={12}
          container
          justifyContent='center'
          >
          <MUI.Box 
            sx={{
              height: 500,
              width: 1/1.33,
              borderRadius: 10,
              backgroundColor: '#EDEFEE',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
            >
                <img className='pic' src={img} alt="" />
              <MUI.Box 
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  marginTop: 5,
                }}
              >
                <MUI.Typography>
                  {title}
                </MUI.Typography>
                <MUI.Typography>
                  ${price}
                </MUI.Typography>
              </MUI.Box>
              <MUI.Box 
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  maxHeight: 70,
                  marginTop: 5,
                }}
              >
                <MUI.Typography noWrap={true} sx={{height: 300, width: 1/1.33}}>
                  {description}
                </MUI.Typography>
              </MUI.Box>
              <MUI.Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                <MUI.Button
                variant='outlined'
                sx={{
                  backgroundColor: '#F4CE14', 
                  color: '#333333', 
                  borderRadius: 4, 
                  minHeight: 50,
                  fontSize: 13,
                  ':hover': {
                    bgcolor: '#333333', 
                    color: '#EDEFEE',
                    borderColor: '#333333'
                  }
                }} 
                >
                  Order a delivery
                </MUI.Button>
                <MUI.DirectionsBikeIcon sx={{pt: 2}}></MUI.DirectionsBikeIcon>
              </MUI.Box>
          </MUI.Box>
        </MUI.Grid>
        )
    })}
    </>
  );


}
export default HighlightsCard