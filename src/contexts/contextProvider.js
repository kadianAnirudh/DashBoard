import React, { useContext, createContext, useState } from 'react';

const StateContext = createContext(); 

const initialState = {
    // the 4 elements listed below govern the clicks on the navbar 
    chat : false,
    cart : false,
    userProfile : false,
    notification : false,
}

export const ContextProvider = ({children}) => {

const [ activeMenu, setActiveMenu ] = useState(true);

const [ isClicked, setIsClicked ] = useState(initialState);

const [ screenSize, setScreenSize ] = useState(undefined);

const [ currentColor, setCurrentColor ] = useState('#03C9D7')

const [ currentMode, setCurrentMode ] = useState('Light')

const [ themeSettings, setThemeSettings ] = useState(false);

const setMode = (e)=>{
setCurrentMode(e.target.value);
localStorage.setItem('themeMode', e.target.value);
setThemeSettings(false)
}

const setColor = (color)=>{
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
setThemeSettings(false)

    }

// since isClicked is an object, you cannot simple replace it with a true / false value.
// hence, you must keep the state alive and change only the concerned element 
const handleClick = (source) => {
setIsClicked({...initialState, [source]:true})
}


    return (
        <StateContext.Provider 
        value = {{
            activeMenu ,
            setActiveMenu,
            isClicked,
            setIsClicked,   
            handleClick, 
            screenSize, setScreenSize, currentMode, currentColor, setColor, setMode, themeSettings, setThemeSettings, setCurrentColor, setCurrentMode

        }} >
            { children }
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);