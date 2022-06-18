import React from "react";
import { IconContext } from "react-icons";
import { VscMenu } from "react-icons/vsc";
import { ContextFunc } from "../../ContextProvider";
import logo from "../../images/logo.svg";

// logo for navbar

const NavLogo = (): JSX.Element => {
    const {
        showFullSideBarMenu,
        setShowFullSideBarMenu,
        desktopView,
        darkTheme,
    } = ContextFunc();

    const handleFullSidebarMenu = () => {
        setShowFullSideBarMenu(!showFullSideBarMenu);
    };
    return (
        <>
            {/* logo image and text container */}

            <div className="nav-logo-container">
                {desktopView ? (
                    <div
                        className={
                            darkTheme
                                ? "sidebar-items ham dark-theme"
                                : "sidebar-items ham"
                        }
                        onClick={handleFullSidebarMenu}
                    >
                        <IconContext.Provider
                            value={{ className: "sidebar-icons ham" }}
                        >
                            <VscMenu />
                        </IconContext.Provider>
                    </div>
                ) : (
                    ""
                )}
                <div className="nav-logo-holder">
                    <div className="nav-logo-img">
                        <img src={logo} alt="" />
                    </div>
                    <h2
                        className={
                            darkTheme
                                ? "nav-logo-text dark-theme"
                                : "nav-logo-text"
                        }
                    >
                        YouTube
                    </h2>
                </div>
            </div>
        </>
    );
};

export default NavLogo;
