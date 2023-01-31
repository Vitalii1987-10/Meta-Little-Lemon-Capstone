import React, { useState } from "react";
import * as MUI from '../../MUI'
import Card from './Card/TestimonialsCard'
import items from './Card/Data/TestimonialsData'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <>
    <MUI.Grid container spacing={2}>
      <MUI.Container
        maxWidth='xl' 
        sx={{
          marginTop: 10,
        }}
      >
        <MUI.Grid container justifyContent={'center'} xl={12}>
          <MUI.Typography variant="h2">
            Testimonials
          </MUI.Typography>

        </MUI.Grid>
        <MUI.Grid
          container spacing={2} 
          sx={{
            mt: 5,
          }}
        >
          <Card items={items}/>
        </MUI.Grid>
      </MUI.Container>
    </MUI.Grid>
    </>
  )
}
export default Testimonials