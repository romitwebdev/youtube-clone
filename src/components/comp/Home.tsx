import React from "react";
import CategoryBar from "./CategoryBar";
import Content from "./Content";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Sidebar from "./SideBar";
import { ContextFunc } from "../../ContextProvider";

const Home = (): JSX.Element => {
    const { desktopView } = ContextFunc();

    return (
        <>
            <div className="home">
                <div className="main">
                    <NavBar />
                </div>
                <div className="sidebar">
                    {desktopView ? <Sidebar /> : ""}
                    <Content />
                </div>
                {!desktopView ? <Footer /> : ""}
            </div>
        </>
    );
};

export default Home;
