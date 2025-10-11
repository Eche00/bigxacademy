import { useState } from "react";
import { Link, NavLink } from "react-router-dom"
import { Close } from "@mui/icons-material"
import GeneralNav from "./GeneralNav";
import DragHandleIcon from '@mui/icons-material/DragHandle';

function Header() {
  const [dropDown,setDropDown] = useState(false)

  return (
    <div className="  fixed top-0 left-0 w-full z-50 py-5 bg-gradient-to-b from-white to-transparent" >
      <section className="flex items-center justify-between max-w-[90%] md:max-w-[85%] mx-auto bg-white py-[10px] relative border-2 border-green-500 shadow-xl rounded-full px-10">
        {/* logo  */}
         <div className="flex flex-1 items-baseline justify-center sm:justify-start gap-2 w-full text-center">
         <Link to="/" className=" text-[24px] font-[700]">
            𝕏.
          </Link> <h2 className="text-green-700 text-[12px] font-bold leading-[30px]">Academy</h2>
         </div>
     
       {/* navigations */}
         <div className="md:flex hidden flex-1 items-center justify-center text-nowrap">
          <nav className="bg-[#56565633]/50 flex  items-center gap-[40px] px-[36px] py-[10px] rounded-full">
          <NavLink to='/' className={({isActive})=> isActive ? 'text-green-700 font-bold text-sm': ' text-gray-700 font-bold text-sm'}>Home</NavLink>
          <NavLink to='/mentorship' className={({isActive})=> isActive ? 'text-green-700 font-bold text-sm': ' text-gray-700 font-bold text-sm'}>Mentorship</NavLink>
          <NavLink to='/signals' className={({isActive})=> isActive ? 'text-green-700 font-bold text-sm': ' text-gray-700 font-bold text-sm'}>Signals</NavLink>
          <NavLink to='/courses' className={({isActive})=> isActive ? 'text-green-700 font-bold text-sm': ' text-gray-700 font-bold text-sm'}>Courses</NavLink>
         </nav>
         </div>


         <div className="md:flex hidden flex-1 items-center justify-end ">
          <Link to='/calculator'  className="w-[106px] h-[40px] bg-green-700 text-white   md:flex hidden items-center justify-center rounded-full">Calculate</Link>
         </div>
        
         <button className=" md:hidden flex absolute right-5" onClick={()=>setDropDown(!dropDown)}>{dropDown ? <Close fontSize="medium"/> :<DragHandleIcon fontSize="medium"/>}</button>
       </section>

       {dropDown &&    
       <GeneralNav setDropDown={setDropDown} />}
    </div>
  )
}

export default Header