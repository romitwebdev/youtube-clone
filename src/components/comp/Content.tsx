import React from "react";
import { ContextFunc } from "../../ContextProvider";
import Card from "./Card";

const Content = (): JSX.Element => {
    const { showFullSideBarMenu, darkTheme } = ContextFunc();

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
