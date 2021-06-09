import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
