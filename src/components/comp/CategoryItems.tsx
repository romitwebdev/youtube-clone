import React from "react";
import { ContextFunc } from "../../ContextProvider";

// category items in category bar

const CategoryItems = (): JSX.Element => {
    const { darkTheme } = ContextFunc();
    return (
        <>
            {/* cat items container */}

            <div
                className={
                    darkTheme
                        ? "cat-items-holder dark-theme"
                        : "cat-items-holder"
                }
            >
                <span>Mixes</span>
            </div>
        </>
    );
};

export default CategoryItems;
