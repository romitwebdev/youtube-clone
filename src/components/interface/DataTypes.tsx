import React from "react";

export interface DataTypes {
    data: { name: string; age: string; address: string }[];
    setData: React.Dispatch<React.SetStateAction<DataTypes["data"]>>;
    hideNav: boolean;
    setHideNav: React.Dispatch<React.SetStateAction<DataTypes["hideNav"]>>;
    desktopView: boolean;
    setDesktopView: React.Dispatch<
        React.SetStateAction<DataTypes["desktopView"]>
    >;
    showFullSideBarMenu: boolean;
    setShowFullSideBarMenu: React.Dispatch<
        React.SetStateAction<DataTypes["showFullSideBarMenu"]>
    >;

    darkTheme: boolean;
    setDarkTheme: React.Dispatch<React.SetStateAction<DataTypes["darkTheme"]>>;

    content: {
        id: string;
        title: string;
        imgUrl: string;
        userId: string;
        views: string;
        days: number;
        duration: string;
    }[];
    setContent: React.Dispatch<React.SetStateAction<DataTypes["content"]>>;
}
