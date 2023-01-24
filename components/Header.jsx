import Image from "next/image"
import HeaderItem from "./HeaderItem"
import {CheckBadgeIcon,InboxStackIcon,HomeIcon,MagnifyingGlassIcon,UserIcon,BoltIcon} from "@heroicons/react/24/outline"



function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 items-center justify-between h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl ">
        <HeaderItem title="HOME" Icon={HomeIcon}/>
        <HeaderItem title="HOME" Icon={BoltIcon}/>
        <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon}/>
        <HeaderItem title="COLLECTIONS" Icon={InboxStackIcon}/>
        <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon}/>
        <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
      </div>
      <Image className=" object-contain " src="https://links.papareact.com/ua6" width ={200} height={200} />
    </header>
  )
}

export default Header
