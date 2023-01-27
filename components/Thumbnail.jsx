import Image from "next/image"
import { HandThumbUpIcon } from "@heroicons/react/24/outline"
import Link from "next/link"


function Thumbnail({data}) {
   const media = data.media_type
   let href = ""
   if(media){
    href = `/info/${data.media_type}/${data.id}`
   }else{
    href = "#"
   }

    function Upercase (str){
      const arr = str.split("")
      const first = arr[0].toUpperCase()
      return first+ arr.slice(1,arr.length).join("")
    }
  return (
    <Link key={data.id} href = {href} >
    <div className=" group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image className=" object-cover" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} width={1080} height={1920} alt="Poster"></Image>
      <div className=" p-2">
        <p className="truncate max-w-md">{data.overview}</p>
        <h2 className=" mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{data.title || data.original_name}</h2>
        <p className="opacity-0 flex items-center  group-hover:opacity-100">
            {data.media_type && `${Upercase(data.media_type)}`}
            {" "}
            {data.release_date || data.first_air_dat} {" "}
            <HandThumbUpIcon className=" h-5 mx-2 "/> {data.vote_count}
        </p>
      </div>
    </div>
    </Link>
  )
}

export default Thumbnail
