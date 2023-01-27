import Link from 'next/link'
import {BrowserRouter as Router,Route} from "react-router-dom";
import React, { useState } from 'react'
import Thumbnail from './Thumbnail'
import Info from './Info'


function Results({results}) {

  return (
    <>
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4'>
      {results.map(item=>
        (<Link key={item.id} href = {`/info/${item.media_type}/${item.id}`} ><Thumbnail  data={item}/></Link>)
        )}
    </div>

   
   </>

  )
}

export default Results
