import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import  AllRoutes  from "./Router/AllRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />

      <Footer />
    </>
  );
}

export default App;
