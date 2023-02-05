import Link from 'next/link'
import {BrowserRouter as Router,Route} from "react-router-dom";
import React, { useState } from 'react'
import Thumbnail from './Thumbnail'
import Info from './Info'


function Results({results}) {

  

  return (
    <>
    <div className='px-5 my-10 sm:grid md:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5'>
      {results.map(item=>
        (<Thumbnail key={item.id} data={item}/>)
        )}
    </div>

   
   </>

  )
}

export default Results
