import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/navbar";
import RoutesPath from "./components/RoutesPath/RoutesPath";
import MyFooter from "./components/Footer/MyFooter";


function App() {
  return (
    <div className="App">
  <Router> 
      <Navbar/> 
      <RoutesPath/>
      <MyFooter/>
  </Router>
    
    </div>
  );
}
export default App;
