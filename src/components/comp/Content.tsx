import React from "react";
import { ContextFunc } from "../../ContextProvider";
import Card from "./Card";
import CategoryBar from "./CategoryBar";

const Content = (): JSX.Element => {
    const { showFullSideBarMenu, darkTheme, desktopView, hideNav } =
        ContextFunc();

    return (
        <>
            {/* content holder */}

            <section
                className={
                    darkTheme
                        ? showFullSideBarMenu
                            ? "content-holder active dark-theme"
                            : "content-holder dark-theme"
                        : showFullSideBarMenu
                        ? "content-holder active"
                        : "content-holder"
                }
            >
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
                <div
                    className={
                        showFullSideBarMenu
                            ? "content-items-holder show-full-sidebar"
                            : "content-items-holder"
                    }
                >
                    <Card />
                </div>
            </section>
        </>
    );
};

export default Content;
