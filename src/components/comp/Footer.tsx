import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { IconContext } from "react-icons";
import { ContextFunc } from "../../ContextProvider";

const Footer = (): JSX.Element => {
    const { darkTheme } = ContextFunc();
    return (
        <>
            {/* footer holder */}

            <footer
                className={
                    darkTheme
                        ? "footer-holder container dark-theme"
                        : "footer-holder container"
                }
            >
                <div className="footer-items">
                    <IconContext.Provider value={{ className: "footer-icons" }}>
                        <AiFillHome />
                    </IconContext.Provider>
                    <p>Home</p>
                </div>
                <div className="footer-items">
                    <IconContext.Provider value={{ className: "footer-icons" }}>
                        <SiYoutubegaming />
                    </IconContext.Provider>
                    <p>Gaming</p>
                </div>
                <div className="footer-items">
                    <IconContext.Provider value={{ className: "footer-icons" }}>
                        <MdOutlineSubscriptions />
                    </IconContext.Provider>
                    <p>Subscription</p>
                </div>
                <div className="footer-items">
                    <IconContext.Provider value={{ className: "footer-icons" }}>
                        <MdOutlineVideoLibrary />
                    </IconContext.Provider>

                    <p>Library</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
