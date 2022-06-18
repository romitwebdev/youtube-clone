import React, { FunctionComponent, ReactNode } from "react";
import { Data } from "./components/interface/Data";
import { DataTypes } from "./components/interface/DataTypes";

const Context = React.createContext(Data);

export const ContextFunc = () => {
    return React.useContext(Context);
};

interface ChildrenProps {
    children?: React.ReactNode;
}

const ContextProvider: React.FunctionComponent<ChildrenProps> = ({
    children,
}) => {
    const [data, setData] = React.useState<DataTypes["data"]>(Data.data);
    const [hideNav, setHideNav] = React.useState<DataTypes["hideNav"]>(
        Data.hideNav
    );
    const [desktopView, setDesktopView] = React.useState<
        DataTypes["desktopView"]
    >(Data.desktopView);
    const [showFullSideBarMenu, setShowFullSideBarMenu] = React.useState<
        DataTypes["showFullSideBarMenu"]
    >(Data.showFullSideBarMenu);

    const [darkTheme, setDarkTheme] = React.useState<DataTypes["darkTheme"]>(
        Data.darkTheme
    );
    const [content, setContent] = React.useState<DataTypes["content"]>(
        Data.content
    );
    const { Provider } = Context;
    return (
        <Provider
            value={{
                data,
                setData,
                hideNav,
                setHideNav,
                desktopView,
                setDesktopView,
                showFullSideBarMenu,
                setShowFullSideBarMenu,
                darkTheme,
                setDarkTheme,
                content,
                setContent,
            }}
        >
            {children}
        </Provider>
    );
};

export default ContextProvider;
