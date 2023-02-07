import React, { useState } from "react";
import * as MUI from "../../MUI";
import Card from "./Card/HighlightsCard";
import items from "./Card/data/HighlightsData";
import "./Highlights.css";

const Highlights = () => {
  const [specials, setSpecials] = useState(items);

  const check = () => {
    console.log(specials);
  };

  return (
    <>
      <MUI.Container
        maxWidth="xl"
        sx={{
          marginTop: 10,
          // border: 1
        }}
      >
        <MUI.Grid container spacing={2}>
          <MUI.Grid
            item
            xl={6}
            lg={6}
            md={12}
            xs={12}
            sm={12}
            // sx={{border: 1}}
            container
            justifyContent="center"
          >
            <MUI.Typography
              variant="h3"
              component="h3"
              sx={{
                color: "#333333",
              }}
            >
              This week Specials!
            </MUI.Typography>
          </MUI.Grid>
          <MUI.Grid
            item
            xl={6}
            lg={6}
            md={12}
            xs={12}
            sm={12}
            // sx={{border: 1}}
            container
            justifyContent="center"
            alignItems="center"
          >
            <MUI.Button
              variant="outlined"
              sx={{
                backgroundColor: "#F4CE14",
                color: "#333333",
                borderRadius: 4,
                minHeight: 50,
                fontSize: 16,
                ":hover": {
                  bgcolor: "#333333",
                  color: "#EDEFEE",
                  borderColor: "#333333",
                },
              }}
              onClick={() => check()}
            >
              Online Menu
            </MUI.Button>
          </MUI.Grid>
        </MUI.Grid>
        <MUI.Grid
          container
          spacing={2}
          sx={{
            mt: 10,
          }}
          justifyContent="center"
        >
          <Card items={specials} />
        </MUI.Grid>
      </MUI.Container>
    </>
  );
};
export default Highlights;
