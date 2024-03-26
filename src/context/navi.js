import { createContext, useState, useEffect } from "react";

const NaviContext = createContext();

function NaviProvider({children}) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    //handles when user goes back and forth between pages, not a full reset
    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handler);

        return ()=> {
            window.removeEventListener('popstate', handler);
        };
    }, []);

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }

    return (
        <NaviContext.Provider value={{currentPath, navigate}}>
            {children}
        </NaviContext.Provider>
    )
}

export {NaviProvider};
export default NaviContext;