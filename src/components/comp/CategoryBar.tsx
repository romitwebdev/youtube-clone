import React from "react";
import { RiCompass3Line } from "react-icons/ri";
import { IconContext } from "react-icons";
import CategoryItems from "./CategoryItems";
import { ContextFunc } from "../../ContextProvider";
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CategoryBar = (): JSX.Element => {
    const [showRightArrow, setShowRightArrow] = React.useState<boolean>(true);
    const [showLeftArrow, setShowLeftArrow] = React.useState<boolean>(false);
    const { desktopView, showFullSideBarMenu, darkTheme } = ContextFunc();
    let slideContainerRef = React.useRef<HTMLDivElement>(null!);

    const slideFunc = (args: string) => {
        if (slideContainerRef) {
            let scrollAmount = slideContainerRef.current.scrollLeft;
            let maxScrollAmount = slideContainerRef.current.scrollWidth;

            console.log(args);

            // console.log(scrollAmount, maxScrollAmount);
            if (args === "left") {
                setShowLeftArrow(true);
                if (scrollAmount >= maxScrollAmount) {
                    console.log(scrollAmount, maxScrollAmount);

                    setShowRightArrow(false);
                }
            } else if (args === "right") {
                setShowRightArrow(true);
                if (scrollAmount <= 0) {
                    setShowLeftArrow(false);
                }
            }
            args === "left"
                ? slideContainerRef.current.scrollTo({
                      top: 0,
                      left: (scrollAmount += 150),
                      behavior: "smooth",
                  })
                : slideContainerRef.current.scrollTo({
                      top: 0,
                      left: (scrollAmount -= 150),
                      behavior: "smooth",
                  });
        } else {
            console.log("slide container is undefine or null");
        }
    };

    return (
        <>
            {/* category holder */}

            <div
                className={
                    darkTheme
                        ? showFullSideBarMenu
                            ? "category-holder active dark-theme"
                            : "category-holder dark-theme"
                        : showFullSideBarMenu
                        ? "category-holder active"
                        : "category-holder"
                }
            >
                {/* categories list items */}
                <div className="category-list-holder" ref={slideContainerRef}>
                    {/* explore button */}

                    {desktopView ? (
                        ""
                    ) : (
                        <div className="cat-explore-holder">
                            <div className="explore-container">
                                <div
                                    className={
                                        darkTheme
                                            ? "cat-explore-title dark-title"
                                            : "cat-explore-title"
                                    }
                                >
                                    <IconContext.Provider
                                        value={{
                                            className: "cat-explore-logo",
                                        }}
                                    >
                                        <RiCompass3Line />
                                    </IconContext.Provider>
                                    <span className="cat-explore-text">
                                        Explore
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                    <CategoryItems />
                </div>
                {desktopView ? (
                    <>
                        {showLeftArrow ? (
                            <div
                                className={
                                    darkTheme
                                        ? "arrow-container left dark-theme"
                                        : "arrow-container left"
                                }
                            >
                                <div onClick={() => slideFunc("right")}>
                                    <IconContext.Provider
                                        value={{ className: "arrow left" }}
                                    >
                                        <MdOutlineKeyboardArrowLeft />
                                    </IconContext.Provider>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                        {showRightArrow ? (
                            <div
                                className={
                                    darkTheme
                                        ? "arrow-container right dark-theme"
                                        : "arrow-container right"
                                }
                            >
                                <div onClick={() => slideFunc("left")}>
                                    <IconContext.Provider
                                        value={{ className: "arrow right" }}
                                    >
                                        <MdOutlineKeyboardArrowRight />
                                    </IconContext.Provider>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                    </>
                ) : (
                    ""
                )}
            </div>
        </>
    );
};

export default CategoryBar;
