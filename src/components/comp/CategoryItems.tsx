import React from "react";
import { ContextFunc } from "../../ContextProvider";

// category items in category bar

const category = [
    { id: 0, name: "All" },
    { id: 2, name: "Mixes" },
    { id: 3, name: "Stranger Things" },
    { id: 4, name: "Playlist" },
    { id: 5, name: "Electronic Music" },
    { id: 6, name: "Gaming" },
    { id: 7, name: "Lo-fi" },
    { id: 8, name: "Trailers" },
    { id: 9, name: "Recently Uploaded" },
    { id: 10, name: "Watched" },
    { id: 11, name: "New to you" },
    { id: 12, name: "Mixes" },
    { id: 13, name: "Stranger Things" },
    { id: 14, name: "Playlist" },
    { id: 15, name: "Electronic Music" },
    { id: 16, name: "Gaming" },
    { id: 17, name: "Lo-fi" },
    { id: 18, name: "Trailers" },
    { id: 19, name: "Recently Uploaded" },
    { id: 20, name: "Watched" },
    { id: 21, name: "New to you" },
];

const CategoryItems = (): JSX.Element => {
    const { darkTheme } = ContextFunc();
    return (
        <>
            {/* cat items container */}

            {category.map((cat) => {
                return (
                    <div
                        key={cat.id}
                        className={
                            darkTheme
                                ? "cat-items-holder dark-theme"
                                : "cat-items-holder"
                        }
                    >
                        <span>{cat.name}</span>
                    </div>
                );
            })}

            {/* <div
                className={
                    darkTheme
                        ? "cat-items-holder dark-theme"
                        : "cat-items-holder"
                }
            >
                <span>maxerrrrrreeeeeeeeeejjjjjjj</span>
            </div> */}
        </>
    );
};

export default CategoryItems;
