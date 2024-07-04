import { Outlet } from "react-router-dom";
import NavBar from "./Header/Nav/NavBar";
import Banner from "./Main/Banner/Banner";
import Exprience from "./Main/Exprience/Exprience";
import Education from "./Main/Education/Education";
import Footer from "./Footer/Footer";
import Certificate from "./Main/Certificate/Certificate";
import Subscribe from "./Subscribe/Subscribe";

const Component = () => {
    return (
        <div className="bg-slate-800">
            <NavBar></NavBar>
            <Banner></Banner>
            <Exprience></Exprience>
            <Education></Education>
            <Certificate></Certificate>
            <Subscribe></Subscribe>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Component;