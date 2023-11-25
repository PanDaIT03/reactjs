import { ReactNode, createContext, useState } from "react";

interface IProvider {
    children: ReactNode
};

interface IContext {
    active: boolean
    setActive: (active: boolean) => void
};

export const SidebarContext = createContext<IContext>({} as IContext);

export const AppProvider = ({ children }: IProvider) => {
    const [active, setActive] = useState(true);

    return <SidebarContext.Provider value={{ active, setActive }}>
        {children}
    </SidebarContext.Provider>
};