import logo from "./logo.svg";
import "./App.css";
import { FaReact, FaGithub } from "react-icons/fa";
import { MdAccessAlarm } from "react-icons/md";
import Header from "./common/Header/Header";
import Sidebar from "./common/Sidebar/Sidebar";
import Dashbaord from "./components/Dashbaord/Dashbaord";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="lg:block hidden">
        <Sidebar />
      </div>
      <Dashbaord />
    </div>
  );
}

export default App;
