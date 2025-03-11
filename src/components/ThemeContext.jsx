import React, { createContext, useState } from "react";

export const Context = createContext()


function ThemeProvider({children}){

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

    function ToggleTheme(){
        const newTheme = theme === "light"? "dark": "light"
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
    }

    return(
        <Context.Provider value={{theme,ToggleTheme}}>
            {children}
        </Context.Provider >
    )
}

export default ThemeProvider;