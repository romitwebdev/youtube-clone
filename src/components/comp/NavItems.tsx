import React from "react";
import { FaChromecast } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { ContextFunc } from "../../ContextProvider";
import { RiVideoAddLine } from "react-icons/ri";
import { BsGrid3X3Gap } from "react-icons/bs";

// nav items for navbar

const NavItems = (): JSX.Element => {
    const { desktopView, darkTheme, setDarkTheme } = ContextFunc();

    const toggleDarkMode = () => {
        setDarkTheme(!darkTheme);
    };
    return (
        <div>
            {/* NavItems container */}

            <div className="nav-content-holder">
                <div className="nav-items-holder">
                    {/* screen mirror icon */}
                    <div>
                        {desktopView ? (
                            <IconContext.Provider
                                value={{
                                    className: darkTheme
                                        ? "nav-icon upload dark-theme"
                                        : "nav-icon upload",
                                }}
                            >
                                <RiVideoAddLine />
                            </IconContext.Provider>
                        ) : (
                            <IconContext.Provider
                                value={{
                                    className: darkTheme
                                        ? "nav-icon mirror dark-theme"
                                        : "nav-icon mirror",
                                }}
                            >
                                <FaChromecast />
                            </IconContext.Provider>
                        )}
                    </div>

                    {/* grid menu icon */}

                    {desktopView ? (
                        <div>
                            {" "}
                            <IconContext.Provider
                                value={{
                                    className: darkTheme
                                        ? "nav-icon grid-menu dark-theme"
                                        : "nav-icon grid-menu",
                                }}
                            >
                                <BsGrid3X3Gap />
                            </IconContext.Provider>
                        </div>
                    ) : (
                        ""
                    )}

                    {/* notification bell icon */}
                    <div>
                        <IconContext.Provider
                            value={{
                                className: darkTheme
                                    ? "nav-icon bell dark-theme"
                                    : "nav-icon bell",
                            }}
                        >
                            <IoMdNotificationsOutline />
                        </IconContext.Provider>
                    </div>

                    {/* search icon  */}
                    {desktopView ? (
                        ""
                    ) : (
                        <div>
                            <IconContext.Provider
                                value={{
                                    className: darkTheme
                                        ? "nav-icon search dark-theme"
                                        : "nav-icon search",
                                }}
                            >
                                <IoSearchOutline />
                            </IconContext.Provider>
                        </div>
                    )}
                </div>
                {/* navprofile container */}

                <div className="nav-profile-holder" onClick={toggleDarkMode}>
                    <img
                        src="https://i.pinimg.com/originals/63/a5/e8/63a5e8ee8cdcfab2f952bcd46a73e5c4.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default NavItems;
