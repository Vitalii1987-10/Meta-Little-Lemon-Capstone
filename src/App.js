import Navbar from "./componenets/Navbar/Navbar";
import Footer from "./componenets/Footer/Footer";
import Home from "./componenets/Home/Home";
import BookTable from "./componenets/BookTable/BookTable";
import "./App.css";
import { useState } from "react";

function App() {
  const [openBookTable, setOpenBookTable] = useState(false);

  const handleOpenBookTable = () => {
    setOpenBookTable(!openBookTable);
    console.log('Open Booking')
  };

  return (
    <>
      <Navbar />
      {openBookTable ? (
        <BookTable handleOpenBookTable={handleOpenBookTable}/>
      ) : (
        <Home handleOpenBookTable={handleOpenBookTable} />
      )}
      <Footer />
    </>
  );
}

export default App;
