import logo from './logo.svg';
import './App.css';
import React , { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Navbar, Footer, Sidebar, ThemeSettings,  Stacked } from './components';
import { Ecommerce, Orders, Calendar, Employees, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, 
ColorPicker, ColorMapping, Editor, Line,  } from './pages'

import { useStateContext } from './contexts/contextProvider';

const App = () => {

// Context API imports can take place here.
// theme settings is the theme setting sidebar, which when : true, displays a sidebar
const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode} = useStateContext();

  return (
    // parent div 
    // dark mode can be activated by using tailwind to give the parent div, a class name of 'dark'
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <div className="flex relative dark:bg-main-dark-bg">
              
{/* tailwind css code for settings button */}
<div className="fixed right-4 bottom-4" style={{zIndex : '1000'}}>
  {/* on clicking the button, theme setting state changes to TRUE and sidebar is displayed */}
<TooltipComponent content="Settings" position="Top">
  <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
   style={{background:currentColor, borderRadius:'50%'}}
   onClick={()=>setThemeSettings(true)}>
<FiSettings/>
  </button>
</TooltipComponent>
</div>
{/* SIDEBAR , a condition is being applied for the sidebar wrt activeMenu which is a State, when active menu is true, sidebar else no sidebar.  */}
{ activeMenu ? (
//  Sidebar is presnt, active menu is true.
<div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
  <Sidebar/>
</div> )  : 
//  Sidebar is closed, menu is false
( <div className="w-0 dark:bg-secondary-dark-bg">
  <Sidebar/>
</div>
)}


<div className = {`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72': 'flex-2'}`}>
  {/*  Navigation Bar */}
<div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
<Navbar/>
</div>

{themeSettings && <ThemeSettings/> }

{/* ROUTES */}
<Routes>
  {/* ecommerce toggle path , ie : DASHBOARD */}
<Route path="/" element={<Ecommerce/>} /> 
<Route path="/ecommerce" element={<Ecommerce/>} /> 

{/* Pages  */}
<Route path="/orders" element={<Orders/>} /> 
<Route path="/employees" element={<Employees/>} /> 
<Route path="/customers" element={<Customers/>} /> 

{/* Apps */}
<Route path="/kanban" element={<Kanban/>} /> 
<Route path="/editor" element={<Editor/>} /> 
<Route path="/calendar" element={<Calendar/>} /> 
<Route path="/color-picker" element={<ColorPicker/>} /> 

{/* Charts */}
<Route path="/line" element={<Line/>} /> 
<Route path="/area" element={<Area/>} /> 
<Route path="/Bar" element={<Bar/>} /> 
<Route path="/pie" element={<Pie/>} /> 
<Route path="/financial" element={<Financial/>} /> 
<Route path="/color-mapping" element={<ColorMapping/>} /> 
<Route path="/pyramid" element={<Pyramid/>} /> 
<Route path="/stacked" element={<Stacked/>} /> 

</Routes>

</div>

    </div>
    </div>
  );
}

export default App;