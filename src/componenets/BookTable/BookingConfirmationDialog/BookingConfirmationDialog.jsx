import React, { useEffect, useState } from "react";
import * as MUI from "../../../MUI";
import logo from "../../../assets/Asset 16@4x.png";

import dayjs from "dayjs";

function Dialog(props) {
  const {
    onClose,
    handleFinish,
    open,
    time,
    guests,
    occasion,
    tableType,
    comment,
    date,
    firstName,
    lastName,
    phone,
    email,
  } = props;

  const handleClose = () => {
    onClose();
  };

  const handleFinishBooking = () => {
    handleFinish();
  };

  return (
    <MUI.Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <MUI.DialogTitle display="flex" justifyContent="center">
        <MUI.Box
          component="img"
          src={logo}
          alt=""
          sx={{
            width: 300,
          }}
        />
      </MUI.DialogTitle>
      <div
        style={{
          backgroundColor: "#495E57",
          minHeight: "10vh",
        }}
      >
        <MUI.Typography
          display={"flex"}
          justifyContent={"center"}
          variant="h2"
          component="h1"
          sx={{
            color: "#F4CE14",
          }}
        >
          Thank you {firstName}
        </MUI.Typography>
        <MUI.Typography
          display="flex"
          justifyContent="center"
          sx={{
            color: "#EDEFEE",
            borderBottom: 1,
          }}
        >
          Your reservation has been confirmed
        </MUI.Typography>
        <MUI.Grid container spacing={2} sx={{ mt: 3 }}>
          <MUI.Grid
            xl={4}
            sx={{
              height: 70,
              color: "#EDEFEE",
            }}
            container
            justifyContent={"center"}
            alignItems={"center"}
          >
            <MUI.Box display={"flex"} flexDirection={"column"}>
              <MUI.Typography display={"flex"} justifyContent={"center"}>
                {dayjs(date).format("ll")}
              </MUI.Typography>
              <MUI.Typography display={"flex"} justifyContent={"center"}>
                date
              </MUI.Typography>
            </MUI.Box>
          </MUI.Grid>
          <MUI.Grid
            xl={4}
            sx={{
              height: 70,
              color: "#EDEFEE",
              borderRight: 1,
              borderLeft: 1,
            }}
            container
            justifyContent={"center"}
            alignItems={"center"}
            direction="column"
          >
            <MUI.Typography>{time}</MUI.Typography>
            <MUI.Typography>Time</MUI.Typography>
          </MUI.Grid>
          <MUI.Grid
            xl={4}
            sx={{
              height: 70,
              color: "#EDEFEE",
            }}
            container
            justifyContent={"center"}
            alignItems={"center"}
            direction="column"
          >
            <MUI.Typography>{guests}</MUI.Typography>
            <MUI.Typography>Guests</MUI.Typography>
          </MUI.Grid>
        </MUI.Grid>
      </div>
      <MUI.Divider sx={{ mt: 1, borderTop: 1 }} />
      <MUI.Grid container spacing={2} sx={{ mt: 1 }}>
        <MUI.Grid
          xl={6}
          sx={{
            height: 70,
            borderRight: 1,
            color: "#333333",
          }}
          container
          justifyContent={"center"}
          alignItems={"center"}
          direction="column"
        >
          <MUI.Typography>Table Type:</MUI.Typography>
          <MUI.Typography>{tableType}</MUI.Typography>
        </MUI.Grid>
        <MUI.Grid
          xl={6}
          sx={{
            height: 70,
            color: "#333333",
          }}
          container
          justifyContent={"center"}
          alignItems={"center"}
          direction="column"
        >
          <MUI.Typography>Occasion</MUI.Typography>
          <MUI.Typography>{occasion}</MUI.Typography>
        </MUI.Grid>
      </MUI.Grid>
      <MUI.Grid container spacing={2} sx={{ mt: 1 }}>
        <MUI.Grid
          xl={12}
          sx={{
            height: 70,
            color: "#333333",
          }}
          container
          justifyContent={"center"}
          alignItems={"center"}
          direction="column"
        >
          <MUI.Button
            variant="outlined"
            onClick={handleFinishBooking}
            sx={{
              backgroundColor: "#F4CE14",
              color: "#333333",
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
            Finish
          </MUI.Button>
        </MUI.Grid>
      </MUI.Grid>
      <MUI.Grid container spacing={2} sx={{ mt: 1 }} justifyContent={"center"}>
        <MUI.Box>
          <MUI.Typography>
            Your reservation request was sent to Email.
          </MUI.Typography>
          <MUI.Typography>
            If you have any questions please call us at Phone.
          </MUI.Typography>
        </MUI.Box>
      </MUI.Grid>
    </MUI.Dialog>
  );
}

const BookingConfirmationDialog = (props) => {
  const {
    time,
    guests,
    occasion,
    tableType,
    comment,
    date,
    firstName,
    lastName,
    phone,
    email,
    handleOpenBookTable,
    emailCheckMessage,
    timeCheckMessage,
    guestsCheckMessage,
  } = props;

  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    const timeValidation = checkTime(time);
    const emailValidation = checkEmail(email);
    const guestsValidation = checkGuests(guests);
    if (timeValidation && emailValidation & guestsValidation) {
      setOpenDialog(!openDialog);
    }
  };

  const checkTime = (time) => {
    let check = true;
    if (time == "") {
      check = false;
    }
    timeCheckMessage(check);
    return check;
  };
  const checkGuests = (guests) => {
    let check = true;
    if (guests == "") {
      check = false;
    }
    guestsCheckMessage(check);
    return check;
  };
  const checkEmail = (email) => {
    const check = /\S+@\S+\.\S+/.test(email);
    emailCheckMessage(check);
    return check;
  };

  const handleFinish = () => {
    handleOpenBookTable();
  };

  return (
    <>
      <MUI.Button
        variant="outlined"
        sx={{
          backgroundColor: "#F4CE14",
          color: "#333333",
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
        onClick={handleOpenDialog}
      >
        Next
      </MUI.Button>
      <Dialog
        open={openDialog}
        onClose={handleOpenDialog}
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
        handleFinish={handleFinish}
      />
    </>
  );
};

export default BookingConfirmationDialog;
