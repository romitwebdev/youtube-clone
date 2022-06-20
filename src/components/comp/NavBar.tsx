import React from "react";
import NavItems from "./NavItems";
import NavLogo from "./NavLogo";
import { ContextFunc } from "../../ContextProvider";
import SearchBar from "./SearchBar";

const NavBar = (): JSX.Element => {
    const { hideNav, setHideNav, desktopView, setDesktopView, darkTheme } =
        ContextFunc();

    React.useEffect(() => {
        darkTheme
            ? document.body.classList.add("dark-theme")
            : document.body.classList.remove("dark-theme");
    });

    // hide and show the navbar
    const handleScroll = () => {
        if (
            document.documentElement.scrollTop > 60 ||
            document.body.scrollTop > 60
        ) {
            setHideNav(true);
        } else {
            setHideNav(false);
        }
    };

    // trigger handleScroll func on window scroll
    React.useEffect(() => {
        window.onscroll = function () {
            handleScroll();
        };
        if (window.innerWidth > 1024) {
            setDesktopView(true);
        }
    });

    // function for toggling desktop view
    const desktopViewFunc = () => {
        if (window.innerWidth > 1024) {
            setDesktopView(true);
        } else {
            setDesktopView(false);
        }
    };

    // trigger desktopViewFunc and window resize
    window.addEventListener("resize", desktopViewFunc);

    return (
        <nav className={hideNav ? "nav hide-nav" : "nav"}>
            <div
                className={
                    darkTheme
                        ? hideNav
                            ? "nav-holder container hide-logo dark-theme"
                            : "nav-holder container dark-theme"
                        : hideNav
                        ? "nav-holder container hide-logo"
                        : "nav-holder container"
                }
            >
                <NavLogo />

                {desktopView ? <SearchBar /> : ""}

                <NavItems />
            </div>
        </nav>
    );
};

export default NavBar;
