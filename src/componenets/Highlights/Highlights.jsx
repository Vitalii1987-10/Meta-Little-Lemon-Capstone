import * as MUI from '../../MUI'

const Highlights = () => {
  return (
    <>
      <MUI.Container maxWidth='xl' sx={{
        marginTop: 10,
      }}>
        <MUI.Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
          <MUI.Typography>
            This week Specials!
          </MUI.Typography>
          <MUI.Button>
            <MUI.Typography>
              Online Menu
            </MUI.Typography>
          </MUI.Button>
        </MUI.Box>
      </MUI.Container>
    </>
  )
}
export default Highlights