import React, { useState } from "react";
import * as MUI from '../../MUI'
import Card from './Card/HighlightsCard'
import items from './Card/data/HighlightsData'
import './Highlights.css'

const Highlights = () => {
  const [specials, setSpecials] = useState(items)

  const check = () => {
    console.log(specials)
  }

  return (
    <>
      <MUI.Container 
        maxWidth='xl' 
        sx={{
        marginTop: 10,
      }}
      >
          <MUI.Grid container spacing={2}>
            <MUI.Grid xl={6}>
              <MUI.Typography 
              variant='h3'
              component='h3'
              sx={{
                ml: 22,
                color: '#333333', 
              }}
              >
                This week Specials!
              </MUI.Typography>
            </MUI.Grid>
            <MUI.Grid container justifyContent={'right'} xl={6}>
              <MUI.Button 
                variant='outlined'
                sx={{
                  mr: 25,
                  backgroundColor: '#F4CE14', 
                  color: '#333333', 
                  borderRadius: 4, 
                  minHeight: 50,
                  fontSize: 16,
                  ':hover': {
                    bgcolor: '#333333', 
                    color: '#EDEFEE',
                    borderColor: '#333333'
                  }
                }}
                onClick={() => check()}
                >
                  Online Menu
              </MUI.Button>
            </MUI.Grid>
          </MUI.Grid>
          <MUI.Grid 
            container spacing={2} 
            sx={{
              mt: 10,
            }}
            >
            <Card items={specials}/>
          </MUI.Grid>
      </MUI.Container>
    </>
  )
}
export default Highlights