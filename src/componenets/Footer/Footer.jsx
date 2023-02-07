import * as MUI from "../../MUI";
import footer from "../../assets/Asset 9@4x.png";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#495E57",
        marginTop: "auto",
        minHeight: "10vh",
      }}
    >
      <MUI.Container className="container" maxWidth="xl">
        <MUI.Box
          display="flex"
          justifyContent="center"
          sx={{
            flexGrow: 1,
          }}
        >
          <MUI.Grid maxWidth="xl" container spacing={2}>
            <MUI.Grid
              item
              xl={4}
              lg={4}
              md={12}
              xs={12}
              sm={12}
              container
              justifyContent={{lg: 'left', sm: 'center'}}
            >
              <MUI.Box
                display="flex"
                flexDirection={"column"}
                justifyContent={"center"}
                sx={{
                  height: 150,
                  // border: 1,
                }}
              >
                <MUI.Typography
                  variant="h5"
                  sx={{
                    color: "#EDEFEE",
                  }}
                >
                  Contact
                </MUI.Typography>
                <MUI.Typography
                  variant="body1"
                  sx={{
                    color: "#EDEFEE",
                  }}
                >
                  Address:
                </MUI.Typography>
                <MUI.Typography
                  variant="body1"
                  sx={{
                    color: "#EDEFEE",
                  }}
                >
                  Phone:
                </MUI.Typography>
                <MUI.Typography
                  variant="body1"
                  sx={{
                    color: "#EDEFEE",
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
              // sx={{
              //   border: 1
              // }}
              justifyContent="center"
            >
              <MUI.Box
                sx={{
                  height: 150,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  // border: 1
                }}
              >
                <MUI.Typography
                  variant="h5"
                  sx={{
                    color: "#EDEFEE",
                  }}
                  display='flex'
                  justifyContent={'center'}
                >
                  Social Media
                </MUI.Typography>
                <MUI.Box
                                  display='flex'
                  justifyContent={'center'}
                  alignItems={'center'}
                // sx={{
                //   border: 1
                // }}
                >
                  <MUI.FacebookIcon
                    sx={{
                      mr: 2,
                      ml: 2,
                      color: "#EDEFEE",
                    }}
                  />
                  <MUI.InstagramIcon
                    sx={{
                      mr: 2,
                      ml: 2,
                      color: "#EDEFEE",
                    }}
                  />
                  <MUI.TwitterIcon
                    sx={{
                      mr: 2,
                      ml: 2,
                      color: "#EDEFEE",
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
              sx={{}}
              container
              justifyContent={{ lg: "right", sm: "center" }}
              alignItems={"center"}
            >
              <MUI.Box
                component="img"
                src={footer}
                alt=""
                sx={{
                  height: 120,
                  width: 70,
                  borderRadius: 3,
                }}
              />
            </MUI.Grid>
          </MUI.Grid>
        </MUI.Box>
      </MUI.Container>
    </div>
  );
};
export default Footer;
