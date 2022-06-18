import React from "react";
import CategoryBar from "./CategoryBar";
import Content from "./Content";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Sidebar from "./SideBar";
import { ContextFunc } from "../../ContextProvider";

const Home = (): JSX.Element => {
    const { hideNav, desktopView, showFullSideBarMenu, darkTheme } =
        ContextFunc();

    return (
        <>
            <div className="home">
                <div className="main">
                    <NavBar />
                    <div
                        id={
                            desktopView && showFullSideBarMenu
                                ? "move-category-bar"
                                : ""
                        }
                        className={
                            darkTheme
                                ? hideNav
                                    ? "category-bar-container hide-bar dark-theme"
                                    : "category-bar-container dark-theme"
                                : hideNav
                                ? "category-bar-container hide-bar"
                                : "category-bar-container"
                        }
                    >
                        <CategoryBar />
                    </div>
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
