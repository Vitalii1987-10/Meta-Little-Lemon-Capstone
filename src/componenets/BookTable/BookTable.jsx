import { useState } from "react";
import * as MUI from "../../MUI";
import TimeData from "./Data/TimeData";
import GuestsData from "./Data/GuestsData";
import OccasionsData from "./Data/OccasionsData";
import TableTypeData from "./Data/TableTypeData";
import BookingConfirmationDialog from "./BookingConfirmationDialog/BookingConfirmationDialog";

import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const BookTable = ({ handleOpenBookTable }) => {
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccassion] = useState("None");
  const [tableType, setTableType] = useState("Inside");
  const [comment, setComment] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(dayjs(new Date()));

  const [timeError, setTimeError] = useState(false)
  const [timeErrorMessage, setTimeErrorMessage] = useState('')
  const [guestsError, setGuestsError] = useState(false)
  const [guestsErrorMessage, setGuestsErrorMessage] = useState('')
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const maxCharacters = 50;

  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };

  const handleChangeGuests = (e) => {
    setGuests(e.target.value);
  };

  const handleChangeDate = (newValue) => {
    setDate(newValue);
  };

  const handleChangeOccasion = (e) => {
    setOccassion(e.target.value);
  };

  const handleChangeTableType = (e) => {
    setTableType(e.target.value);
  };

  const handleChangeComment = (e) => {
    setComment(e.target.value);
  };

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const timeCheckMessage = (state) => {
    if (state == false) {
      setTimeError(true)
      setTimeErrorMessage("Please enter a time.")
    } else {
      setTimeError(false)
      setTimeErrorMessage("")
    }
  };

  const guestsCheckMessage = (state) => {
    if(state == false) {
      setGuestsError(true)
      setGuestsErrorMessage('Please enter number of guests')
    } else {
      setGuestsError(false)
      setGuestsErrorMessage('')
    }
  }

  const emailCheckMessage = (state) => {
    if (state == false) {
      setEmailError(true);
      setEmailErrorMessage("Please enter valid email.");
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#495E57",
          minHeight: "50vh",
        }}
      >
        <MUI.Container maxWidth="xl">
          <MUI.Box display="flex" justifyContent="center">
            <MUI.Typography
              variant="h1"
              component="h1"
              sx={{
                color: "#F4CE14",
              }}
            >
              Book a table
            </MUI.Typography>
          </MUI.Box>
          <MUI.Grid container spacing={0}>
            {/* Left Side */}
            <MUI.Grid
              item
              xl={6}
              lg={6}
              md={12}
              xs={12}
              sm={12}
              container
              sx={{
                // border: 1,
                borderWidth: 3,
                height: "100%",
                mt: 10,
              }}
            >
              <MUI.Box
                sx={{
                  width: "100%",
                  mt: 5,
                  // border: 1,
                }}
              >
                <MUI.Box
                  display={"flex"}
                  justifyContent={{ lg: "left", xs: "center" }}
                  sx={{
                    minWidth: 120,
                  }}
                >
                  <MUI.FormControl
                    error={timeError}
                    required
                    variant="filled"
                    sx={{
                      backgroundColor: "#EDEFEE",
                      borderRadius: 3,
                      width: "80%",
                    }}
                  >
                    <MUI.InputLabel>Time</MUI.InputLabel>
                    <MUI.Select
                      labelId="setTime"
                      id="setTime"
                      value={time}
                      label="Time"
                      onChange={handleChangeTime}
                      disableUnderline={true}
                    >
                      {TimeData.map((timeItem) => {
                        const { id, value } = timeItem;
                        return (
                          <MUI.MenuItem key={id} value={value}>
                            {value}
                          </MUI.MenuItem>
                        );
                      })}
                    </MUI.Select>
                    <MUI.FormHelperText>{timeErrorMessage}</MUI.FormHelperText>
                  </MUI.FormControl>
                </MUI.Box>
              </MUI.Box>

              <MUI.Box
                sx={{
                  width: "100%",
                  mt: 5,
                }}
              >
                <MUI.Box
                  display={"flex"}
                  justifyContent={{ lg: "left", xs: "center" }}
                  sx={{
                    minWidth: 120,
                  }}
                >
                  <MUI.FormControl
                     error={guestsError}
                    required
                    variant="filled"
                    sx={{
                      backgroundColor: "#EDEFEE",
                      borderRadius: 3,
                      width: "80%",
                    }}
                  >
                    <MUI.InputLabel>Guests</MUI.InputLabel>
                    <MUI.Select
                      labelId="setGuests"
                      id="setGuests"
                      value={guests}
                      label="Guests"
                      onChange={handleChangeGuests}
                      disableUnderline={true}
                    >
                      {GuestsData.map((guestItem) => {
                        const { id, value } = guestItem;
                        return (
                          <MUI.MenuItem key={id} value={value}>
                            {value}
                          </MUI.MenuItem>
                        );
                      })}
                    </MUI.Select>
                    <MUI.FormHelperText>{guestsErrorMessage}</MUI.FormHelperText>
                  </MUI.FormControl>
                </MUI.Box>
              </MUI.Box>

              <MUI.Box
                display={"flex"}
                justifyContent={{ lg: "left", xs: "center" }}
                sx={{
                  width: "100%",
                  mt: 5,
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MUI.Stack
                    sx={{
                      width: "80%",
                    }}
                  >
                    <DesktopDatePicker
                      inputFormat="MM/DD/YYYY"
                      value={date}
                      onChange={handleChangeDate}
                      renderInput={(params) => (
                        <MUI.TextField
                          size="normal"
                          sx={{
                            backgroundColor: "#EDEFEE",
                            borderRadius: 3,
                            "& fieldset": { border: "none" },
                          }}
                          {...params}
                        />
                      )}
                    />
                  </MUI.Stack>
                </LocalizationProvider>
              </MUI.Box>
            </MUI.Grid>
            {/* Right Side */}
            <MUI.Grid
              item
              xl={6}
              lg={6}
              md={12}
              xs={12}
              sm={12}
              sx={{
                // border: 1,
                borderWidth: 3,
                height: "100%",
                mt: 10,
              }}
              container
              justifyContent={{ lg: "left", sm: "center" }}
            >
              <MUI.TextField
                id="outlined-basic"
                label="First Name"
                variant="filled"
                InputProps={{ disableUnderline: true }}
                onChange={handleChangeFirstName}
                sx={{
                  mt: 5,
                  width: "80%",
                  backgroundColor: "#EDEFEE",
                  borderRadius: 3,
                }}
              />
              <MUI.TextField
                id="outlined-basic"
                label="Last Name"
                variant="filled"
                onChange={handleChangeLastName}
                InputProps={{ disableUnderline: true }}
                sx={{
                  mt: 1,
                  width: "80%",
                  backgroundColor: "#EDEFEE",
                  borderRadius: 3,
                }}
              />
              <MUI.TextField
                id="outlined-basic"
                label="Phone"
                variant="filled"
                onChange={handleChangePhone}
                InputProps={{ disableUnderline: true }}
                sx={{
                  mt: 1,
                  width: "80%",
                  backgroundColor: "#EDEFEE",
                  borderRadius: 3,
                }}
              />
              <MUI.TextField
                error={emailError}
                helperText={emailErrorMessage}
                required
                id="outlined-basic"
                label="Email"
                variant="filled"
                onChange={handleChangeEmail}
                InputProps={{ disableUnderline: true }}
                sx={{
                  mt: 1,
                  width: "80%",
                  backgroundColor: "#EDEFEE",
                  borderRadius: 3,
                }}
              />
            </MUI.Grid>
          </MUI.Grid>
        </MUI.Container>
      </div>
      <div
        style={{
          minHeight: "30vh",
        }}
      >
        <MUI.Container maxWidth="xl" sx={{ mt: 10 }}>
          <MUI.Grid container spacing={2}>
            <MUI.Grid
              item
              xl={6}
              lg={6}
              md={12}
              xs={12}
              sm={12}
              container
              justifyContent="center"
              // sx={{
              //   border: 1,
              //   borderWidth: 3,
              // }}
            >
              <MUI.Grid
                item
                xl={6}
                lg={6}
                md={6}
                xs={12}
                sm={6}
                container
                alignItems="center"
                justifyContent={{ lg: "left", xs: "center" }}
                // sx={{
                //   border: 1
                // }}
              >
                <MUI.FormControl
                  variant="filled"
                  fullWidth
                  sx={{
                    backgroundColor: "#EDEFEE",
                    borderRadius: 3,
                    width: "60%",
                  }}
                >
                  <MUI.InputLabel>Occasion</MUI.InputLabel>
                  <MUI.Select
                    labelId="setOccasion"
                    id="setOccasion"
                    value={occasion}
                    label="Occasion"
                    onChange={handleChangeOccasion}
                    disableUnderline={true}
                    sx={{
                      boxShadow: 3,
                      borderRadius: 3,
                      height: "100%",
                    }}
                  >
                    {OccasionsData.map((occasion) => {
                      const { id, value } = occasion;
                      return (
                        <MUI.MenuItem key={id} value={value}>
                          {value}
                        </MUI.MenuItem>
                      );
                    })}
                  </MUI.Select>
                </MUI.FormControl>
              </MUI.Grid>

              <MUI.Grid
                item
                xl={6}
                lg={6}
                md={6}
                xs={12}
                sm={6}
                container
                alignItems="center"
                justifyContent={{ lg: "left", xs: "center" }}
                // sx={{
                //   border: 1
                // }}
              >
                <MUI.FormControl
                  fullWidth
                  variant="filled"
                  sx={{
                    backgroundColor: "#EDEFEE",
                    borderRadius: 3,
                    width: "60%",
                    mt: 2,
                    mb: 2,
                  }}
                >
                  <MUI.InputLabel>Table Type</MUI.InputLabel>
                  <MUI.Select
                    labelId="setTableType"
                    id="SetTableType"
                    value={tableType}
                    label="TableType"
                    onChange={handleChangeTableType}
                    disableUnderline={true}
                    sx={{
                      boxShadow: 3,
                      borderRadius: 3,
                      height: "100%",
                    }}
                  >
                    {TableTypeData.map((tableType) => {
                      const { id, value } = tableType;
                      return (
                        <MUI.MenuItem key={id} value={value}>
                          {value}
                        </MUI.MenuItem>
                      );
                    })}
                  </MUI.Select>
                </MUI.FormControl>
              </MUI.Grid>
            </MUI.Grid>

            <MUI.Grid
              item
              xl={6}
              lg={6}
              md={12}
              xs={12}
              sm={12}
              sx={{
                // border: 1,
                borderWidth: 3,
                mt: 2,
                mb: 2,
              }}
            >
              <MUI.Typography
                display={"flex"}
                justifyContent={{ lg: "left", sm: "center" }}
                // sx={{
                //   border: 1,
                // }}
              >
                Comment
              </MUI.Typography>
              <MUI.Box
                display={"flex"}
                justifyContent={{ lg: "left", sm: "center" }}
                // sx={{
                //   border: 1
                // }}
              >
                <MUI.TextField
                  placeholder="50 Character Maximum"
                  multiline
                  rows={1}
                  inputProps={{ maxLength: maxCharacters }}
                  onChange={handleChangeComment}
                  sx={{
                    width: "80%",
                    border: 1,
                  }}
                />
              </MUI.Box>
              <MUI.Typography
                display={"flex"}
                justifyContent={{ lg: "left", sm: "center" }}
                // sx={{
                //   border: 1,
                // }}
              >
                Characters entered {comment.length}/{maxCharacters}
              </MUI.Typography>
            </MUI.Grid>
            <MUI.Grid container spacing={2}>
              <MUI.Grid
                item
                xl={6}
                lg={6}
                md={6}
                xs={12}
                sm={6}
                sx={{
                  // border: 1,
                  // borderWidth: 3,
                  mt: 2,
                  mb: 2,
                }}
                container
                justifyContent={{ lg: "right", xs: "center" }}
              >
                <MUI.Button
                  sx={{
                    backgroundColor: "#495E57",
                    color: "#EDEFEE",
                    borderRadius: 3,
                    minWidth: 100,
                    minHeight: 50,
                    fontSize: 16,
                    ":hover": {
                      bgcolor: "#333333",
                      color: "#EDEFEE",
                      borderColor: "#333333",
                    },
                  }}
                >
                  Back
                </MUI.Button>
              </MUI.Grid>
              <MUI.Grid
                item
                xl={6}
                lg={6}
                md={6}
                xs={12}
                sm={6}
                sx={{
                  // border: 1,
                  // borderWidth: 3,
                  mt: 2,
                  mb: 2,
                }}
                container
                justifyContent={{ lg: "left", xs: "center" }}
              >
                <BookingConfirmationDialog
                  time={time}
                  guests={guests}
                  occasion={occasion}
                  tableType={tableType}
                  comment={comment}
                  date={date}
                  firstName={firstName}
                  lastName={lastName}
                  phone={phone}
                  email={email}
                  handleOpenBookTable={handleOpenBookTable}
                  emailCheckMessage={emailCheckMessage}
                  timeCheckMessage={timeCheckMessage}
                  guestsCheckMessage={guestsCheckMessage}
                />
              </MUI.Grid>
            </MUI.Grid>
          </MUI.Grid>
        </MUI.Container>
      </div>
    </>
  );
};
export default BookTable;
