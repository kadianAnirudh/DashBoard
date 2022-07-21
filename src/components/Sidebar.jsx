import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy'
import { useStateContext } from '../contexts/contextProvider';


const Sidebar = () => {

  const {activeMenu, setActiveMenu, screenSize, setScreenSize, currentColor} = useStateContext(); 

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-grey m-2';

  const handleCloseSidebar = () => {
    if(activeMenu && screenSize <= 900 ) {
      setActiveMenu(false);
    }
  }

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
{ activeMenu && (<>
<div className="flex justify-between items-center">
  <Link to='/' onClick={handleCloseSidebar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight 
  dark:text-white text-slate-900">
    <SiShopware /> 
    <span> Anirudh Kadian </span> 
  </Link>
  <TooltipComponent content="Menu" position='BottomCenter'>
<button type="button" onClick={()=>setActiveMenu((prevState)=>!prevState)} className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
  <MdOutlineCancel/>
</button>
  </TooltipComponent>
</div>

<div className="mt-10">
  {/* The links being imported from dummy data is a object type, so map is run for every object */}
{links.map((item)=>(
  <div key={item.title}>
    <p className="text-gray-400 m-3 mt-4 uppercase">
    {item.title}
   </p>
   {/* The objects contain an array which is being mapped here along with the elemnets of the object being rendered.  */}
   {item.links.map((link)=>(
    <NavLink
    // The navlink has a 'to' property which points to the link, which here would be the link name, such as Store. 
    to={`/${link.name}`}
    key={link.name}
    // as soon as something is chosen on a mobile screen, menu is closed. screen width is less than 900px
    onClick={handleCloseSidebar}
    // is active is a special character made for navlink, when it is active, the classes would differ wrt a function attached below. 
    // navlink becomes active when it has been clicked and taken to a new place
    className={({isActive})=> isActive ? activeLink : normalLink}

    style={({isActive})=> ({
     backgroundColor: isActive ? currentColor : ''})}
    >

{link.icon}
<span className="capitalize"> {link.name} </span>
    </NavLink>
   ))}
  </div>
)) }
</div>
</>) }
    </div>
  )
}

export default Sidebar