import * as MUI from '../../../MUI'

const Card = ( { items } ) => {
  return (
    <>
    {items.map((item) => {
      const { id, title, img, price, description} = item
      return (
        <MUI.Grid 
          key={id}
          className='grid' 
          xl={4}
          container
          justifyContent='center'
          >
          <MUI.Box 
            sx={{
              height: 500,
              width: 1/1.33,
              borderRadius: 10,
              border: 2,
              backgroundColor: '#EDEFEE',
            }}
            >
              <img className='pic' src={img} alt="" />
              <MUI.Box 
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  pt: 3,
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
                  maxWidth: 300,
                  paddingLeft: 3.5,
                  pt: 3,
                }}
              >
                <MUI.Typography>
                  {description}
                </MUI.Typography>
              </MUI.Box>
              <MUI.Box sx={{pt: 5, pl: 3, display: 'flex'}}>
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
                <MUI.DirectionsBikeIcon sx={{ml: 15, mt: 2}}></MUI.DirectionsBikeIcon>
              </MUI.Box>
          </MUI.Box>
        </MUI.Grid>
        )
    })}
    </>
  );


}
export default Card