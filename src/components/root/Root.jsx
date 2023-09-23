import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";



const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;