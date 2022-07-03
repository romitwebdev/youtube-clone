import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import {
    MdOutlineSubscriptions,
    MdOutlineVideoLibrary,
    MdOutlineExplore,
    MdOutlineWatchLater,
} from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { IconContext } from "react-icons";
import { ContextFunc } from "../../ContextProvider";
import { RiFeedbackLine, RiHistoryLine, RiVideoLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { BsFlag } from "react-icons/bs";
import { VscHome } from "react-icons/vsc";

const Sidebar = (): JSX.Element => {
    const { showFullSideBarMenu, darkTheme } = ContextFunc();

    return (
        <>
            {/* sidebar holder */}

            {/* <aside
                className={
                    showFullSideBarMenu
                        ? "sidebar-container show-full-sidebar"
                        : "sidebar-container"
                }
            > */}
            <div
                className={
                    darkTheme
                        ? showFullSideBarMenu
                            ? "sidebar-items-container active dark-theme"
                            : "sidebar-items-container dark-theme"
                        : showFullSideBarMenu
                        ? "sidebar-items-container active"
                        : "sidebar-items-container"
                }
            >
                <div
                    className={
                        darkTheme
                            ? "sidebar-items-holder main dark-theme"
                            : "sidebar-items-holder main"
                    }
                >
                    <div
                        className={
                            darkTheme
                                ? showFullSideBarMenu
                                    ? "sidebar-items show-full-sidebar dark-theme"
                                    : "sidebar-items dark-theme"
                                : showFullSideBarMenu
                                ? "sidebar-items show-full-sidebar"
                                : "sidebar-items"
                        }
                    >
                        <IconContext.Provider
                            value={{ className: "sidebar-icons" }}
                        >
                            <VscHome />
                        </IconContext.Provider>
                        <p>Home</p>
                    </div>
                    <div
                        className={
                            darkTheme
                                ? showFullSideBarMenu
                                    ? "sidebar-items show-full-sidebar dark-theme"
                                    : "sidebar-items dark-theme"
                                : showFullSideBarMenu
                                ? "sidebar-items show-full-sidebar"
                                : "sidebar-items"
                        }
                    >
                        <IconContext.Provider
                            value={{ className: "sidebar-icons" }}
                        >
                            <MdOutlineExplore />
                        </IconContext.Provider>
                        <p>Explore</p>
                    </div>
                    <div
                        className={
                            darkTheme
                                ? showFullSideBarMenu
                                    ? "sidebar-items show-full-sidebar dark-theme"
                                    : "sidebar-items dark-theme"
                                : showFullSideBarMenu
                                ? "sidebar-items show-full-sidebar"
                                : "sidebar-items"
                        }
                    >
                        <IconContext.Provider
                            value={{ className: "sidebar-icons" }}
                        >
                            <SiYoutubegaming />
                        </IconContext.Provider>
                        <p>Gaming</p>
                    </div>
                    <div
                        className={
                            darkTheme
                                ? showFullSideBarMenu
                                    ? "sidebar-items show-full-sidebar dark-theme"
                                    : "sidebar-items dark-theme"
                                : showFullSideBarMenu
                                ? "sidebar-items show-full-sidebar"
                                : "sidebar-items"
                        }
                    >
                        {" "}
                        <IconContext.Provider
                            value={{ className: "sidebar-icons" }}
                        >
                            <MdOutlineSubscriptions />
                        </IconContext.Provider>
                        <p>Subscription</p>
                    </div>
                    {showFullSideBarMenu ? (
                        ""
                    ) : (
                        <div
                            className={
                                darkTheme
                                    ? showFullSideBarMenu
                                        ? "sidebar-items show-full-sidebar dark-theme"
                                        : "sidebar-items dark-theme"
                                    : showFullSideBarMenu
                                    ? "sidebar-items show-full-sidebar"
                                    : "sidebar-items"
                            }
                        >
                            <IconContext.Provider
                                value={{ className: "sidebar-icons" }}
                            >
                                <MdOutlineVideoLibrary />
                            </IconContext.Provider>

                            <p>Library</p>
                        </div>
                    )}
                </div>
                {/* sidebar additional items */}
                <div
                    className={
                        darkTheme
                            ? showFullSideBarMenu
                                ? "sidebar-items-holder additional dark-theme"
                                : "sidebar-items-holder dark-theme"
                            : showFullSideBarMenu
                            ? "sidebar-items-holder additional"
                            : "sidebar-items-holder"
                    }
                >
                    {showFullSideBarMenu ? (
                        <div className="sidebar-additional-items">
                            <div
                                className={
                                    darkTheme
                                        ? showFullSideBarMenu
                                            ? "sidebar-items show-full-sidebar dark-theme"
                                            : "sidebar-items dark-theme"
                                        : showFullSideBarMenu
                                        ? "sidebar-items show-full-sidebar"
                                        : "sidebar-items"
                                }
                            >
                                <IconContext.Provider
                                    value={{ className: "sidebar-icons" }}
                                >
                                    <MdOutlineVideoLibrary />
                                </IconContext.Provider>
                                <p>Library</p>
                            </div>
                            <div
                                className={
                                    darkTheme
                                        ? showFullSideBarMenu
                                            ? "sidebar-items show-full-sidebar dark-theme"
                                            : "sidebar-items dark-theme"
                                        : showFullSideBarMenu
                                        ? "sidebar-items show-full-sidebar"
                                        : "sidebar-items"
                                }
                            >
                                <IconContext.Provider
                                    value={{ className: "sidebar-icons" }}
                                >
                                    <RiHistoryLine />
                                </IconContext.Provider>
                                <p>History</p>
                            </div>
                            <div
                                className={
                                    darkTheme
                                        ? showFullSideBarMenu
                                            ? "sidebar-items show-full-sidebar dark-theme"
                                            : "sidebar-items dark-theme"
                                        : showFullSideBarMenu
                                        ? "sidebar-items show-full-sidebar"
                                        : "sidebar-items"
                                }
                            >
                                <IconContext.Provider
                                    value={{ className: "sidebar-icons" }}
                                >
                                    <RiVideoLine />
                                </IconContext.Provider>
                                <p>Your videos</p>
                            </div>
                            <div
                                className={
                                    darkTheme
                                        ? showFullSideBarMenu
                                            ? "sidebar-items show-full-sidebar dark-theme"
                                            : "sidebar-items dark-theme"
                                        : showFullSideBarMenu
                                        ? "sidebar-items show-full-sidebar"
                                        : "sidebar-items"
                                }
                            >
                                {" "}
                                <IconContext.Provider
                                    value={{ className: "sidebar-icons" }}
                                >
                                    <MdOutlineWatchLater />
                                </IconContext.Provider>
                                <p>Watch later</p>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>

                {/* last items */}

                <div
                    className={
                        darkTheme
                            ? showFullSideBarMenu
                                ? "sidebar-items-holder last-items dark-theme"
                                : "sidebar-items-holder dark-theme"
                            : showFullSideBarMenu
                            ? "sidebar-items-holder last-items"
                            : "sidebar-items-holder"
                    }
                >
                    {showFullSideBarMenu ? (
                        <div className="sidebar-last-items">
                            <div
                                className={
                                    darkTheme
                                        ? showFullSideBarMenu
                                            ? "sidebar-items show-full-sidebar dark-theme"
                                            : "sidebar-items dark-theme"
                                        : showFullSideBarMenu
                                        ? "sidebar-items show-full-sidebar"
                                        : "sidebar-items"
                                }
                            >
                                <IconContext.Provider
                                    value={{ className: "sidebar-icons" }}
                                >
                                    <IoSettingsOutline />
                                </IconContext.Provider>
                                <p>Settings</p>
                            </div>
                            <div
                                className={
                                    darkTheme
                                        ? showFullSideBarMenu
                                            ? "sidebar-items show-full-sidebar dark-theme"
                                            : "sidebar-items dark-theme"
                                        : showFullSideBarMenu
                                        ? "sidebar-items show-full-sidebar"
                                        : "sidebar-items"
                                }
                            >
                                <IconContext.Provider
                                    value={{ className: "sidebar-icons" }}
                                >
                                    <BsFlag />
                                </IconContext.Provider>
                                <p>Report history</p>
                            </div>
                            <div
                                className={
                                    darkTheme
                                        ? showFullSideBarMenu
                                            ? "sidebar-items show-full-sidebar dark-theme"
                                            : "sidebar-items dark-theme"
                                        : showFullSideBarMenu
                                        ? "sidebar-items show-full-sidebar"
                                        : "sidebar-items"
                                }
                            >
                                <IconContext.Provider
                                    value={{ className: "sidebar-icons" }}
                                >
                                    <AiOutlineQuestionCircle />
                                </IconContext.Provider>
                                <p>Help</p>
                            </div>
                            <div
                                className={
                                    darkTheme
                                        ? showFullSideBarMenu
                                            ? "sidebar-items show-full-sidebar dark-theme"
                                            : "sidebar-items dark-theme"
                                        : showFullSideBarMenu
                                        ? "sidebar-items show-full-sidebar"
                                        : "sidebar-items"
                                }
                            >
                                {" "}
                                <IconContext.Provider
                                    value={{ className: "sidebar-icons" }}
                                >
                                    <RiFeedbackLine />
                                </IconContext.Provider>
                                <p>Send feedback</p>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>

                {/* footer */}
                <div
                    className={
                        darkTheme
                            ? showFullSideBarMenu
                                ? "sidebar-items-holder footer-items dark-theme"
                                : "sidebar-items-holder dark-theme"
                            : showFullSideBarMenu
                            ? "sidebar-items-holder footer-items"
                            : "sidebar-items-holder"
                    }
                >
                    {showFullSideBarMenu ? (
                        <div>
                            <div
                                className={
                                    darkTheme
                                        ? showFullSideBarMenu
                                            ? "sidebar-items show-full-sidebar footer-items dark-theme"
                                            : "sidebar-items dark-theme"
                                        : showFullSideBarMenu
                                        ? "sidebar-items show-full-sidebar footer-items"
                                        : "sidebar-items"
                                }
                            >
                                <div
                                    className={
                                        darkTheme
                                            ? "footer-items-links dark-theme"
                                            : "footer-items-links"
                                    }
                                >
                                    <a href="#hello">About</a>
                                    <a href="#hello">Press</a>
                                    <a href="#hello">Copyright</a>
                                    <a href="#hello">Contact us</a>
                                    <a href="#hello">Creator</a>
                                    <a href="#hello">Advertise</a>
                                    <a href="#hello">Developers</a>
                                </div>
                            </div>

                            <div
                                className={
                                    darkTheme
                                        ? showFullSideBarMenu
                                            ? "sidebar-items show-full-sidebar footer-items dark-theme"
                                            : "sidebar-items dark-theme"
                                        : showFullSideBarMenu
                                        ? "sidebar-items show-full-sidebar footer-items"
                                        : "sidebar-items"
                                }
                            >
                                <div
                                    className={
                                        darkTheme
                                            ? "footer-items-links dark-theme"
                                            : "footer-items-links"
                                    }
                                >
                                    <a href="#hello">Terms</a>
                                    <a href="#hello">Privacy</a>
                                    <a href="#hello">Policy & Safety</a>
                                    <a href="#hello">How YouTube works</a>
                                    <a href="#hello">Test new features</a>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            {/* </aside> */}
        </>
    );
};

export default Sidebar;
