import request from "@/utils/request"
import { useRouter } from "next/router"
import {AiFillLeftCircle, AiFillRightCircle} from "react-icons/ai"
function Navbar() {
  const router = useRouter()
  const slideLeft =()=>{
   let slider = document.getElementById("navbar")
   slider.scrollLeft = slider.scrollLeft - 500
  }

   const sliderRight =()=>{
   let slider = document.getElementById("navbar")
   slider.scrollLeft = slider.scrollLeft + 500
  }
  return (
    <nav className="relative group">
      <AiFillLeftCircle className=" icon hidden sm:block z-50 opacity-0 group-hover:opacity-100 left-0 absolute text-2xl w-8 h-full 3xl:hidden bg-white text-bubble-gum bg-opacity-50 " onClick={slideLeft}/>
      <div id= "navbar"className=" sch flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide" >
        {Object.entries(request).map((([key,{title,url}])=>
           <button key={key}
             onClick={()=>router.push(`/?genre=${key}`) }
            className=" 	user-select: none list-none last:pr-24  cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">{title}</button>
        ))}
      </div>
      <AiFillRightCircle className=" hidden sm:block  z-50 opacity-0 group-hover:opacity-100 right-0 absolute text-2xl w-8 h-full top-0 3xl:hidden  bg-white text-bubble-gum bg-opacity-50" onClick={sliderRight}/>
    </nav>
  )
}

export default Navbar
