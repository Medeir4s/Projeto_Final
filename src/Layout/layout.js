import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/NavBar";

export default function Layout () {
    return <div className="App">
        <Navbar/>
        <Outlet/>
    </div>
}