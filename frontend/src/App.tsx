import "./styles/App.css";
import Location from "./components/Location";
import Gallery from "./components/Gallery";
import GuestBook from "./components/GuestBook";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Schedule from "./components/Schedule";
import Account from "./components/Account";
import Share from "./components/Share";

function App() {
  return (
    <>
      <Hero />
      <Intro />
      <Schedule />
      <Gallery />
      <GuestBook />
      <Location />
      <Account />
      <Share />
    </>
  );
}

export default App;
