import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        const handler = () => {
            setCurrentPath(() => window.location.pathname);
        }
        window.addEventListener('popstate', handler);
        return () => {
            window.removeEventListener('popstate', handler);
        }
    }, []);
    const navigate = (to) => {
        setCurrentPath(() => to);
        window.history.pushState({},'',to);
    }
    return (
        <NavigationContext.Provider value={{currentPath,navigate}}>
            {children}
        </NavigationContext.Provider>
    )
}

export default NavigationContext;
export { NavigationProvider };