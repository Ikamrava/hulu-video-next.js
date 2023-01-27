import Image from "next/image"
import HeaderItem from "./HeaderItem"
import {CheckBadgeIcon,InboxStackIcon,HomeIcon,MagnifyingGlassIcon,UserIcon,BoltIcon} from "@heroicons/react/24/outline"
import Link from "next/link"



function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 items-center justify-between h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl ">
        <Link href="/"><HeaderItem title="HOME" Icon={HomeIcon}/></Link>
        <Link href="/?genre=fetchTrending"><HeaderItem title="TRENDING" Icon={BoltIcon}/></Link>
        <Link href="/search"><HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon}/></Link>
        <Link href="/?genre=fetch"><HeaderItem title="ACCOUNT" Icon={UserIcon}/></Link>
      </div>
      <Image className=" object-contain " src="https://links.papareact.com/ua6" width ={200} height={200} alt="logo" />
    </header>
  )
}

export default Header
