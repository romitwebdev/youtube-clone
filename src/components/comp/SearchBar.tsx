import React from "react";
import { IconContext } from "react-icons";
import { IoIosSearch } from "react-icons/io";
import { BsMicFill } from "react-icons/bs";
import { ContextFunc } from "../../ContextProvider";

// logo for navbar

const SearchBar = (): JSX.Element => {
    const [searchFocused, setSearchFocused] = React.useState<boolean>(false);

    const { darkTheme } = ContextFunc();

    const handleSearchFocus = () => setSearchFocused(true);

    const handleSearchBlur = () => setSearchFocused(false);

    return (
        <>
            {/* logo image and text container */}

            <div className="search-bar-holder">
                <form action="">
                    <div className="form-search">
                        <div className="search-input-holder">
                            {searchFocused ? (
                                <IconContext.Provider
                                    value={{
                                        className: darkTheme
                                            ? "search-input-icon dark-theme"
                                            : "search-input-icon",
                                    }}
                                >
                                    <IoIosSearch />
                                </IconContext.Provider>
                            ) : (
                                ""
                            )}
                            <input
                                onFocus={handleSearchFocus}
                                onBlur={handleSearchBlur}
                                type="search"
                                name="search"
                                id="search"
                                placeholder="Search"
                                className={
                                    darkTheme ? "search dark-theme" : "search"
                                }
                            />
                        </div>
                        <div
                            className={
                                darkTheme
                                    ? "search-icon-holder dark-theme"
                                    : "search-icon-holder"
                            }
                        >
                            <IconContext.Provider
                                value={{ className: "search-icon" }}
                            >
                                <IoIosSearch />
                            </IconContext.Provider>
                        </div>

                        <div
                            className={
                                darkTheme
                                    ? "mic-icon-holder dark-theme"
                                    : "mic-icon-holder"
                            }
                        >
                            <IconContext.Provider
                                value={{
                                    className: "mic-icon",
                                }}
                            >
                                <BsMicFill />
                            </IconContext.Provider>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SearchBar;
