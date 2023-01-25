import React from 'react'
import Thumbnail from './Thumbnail'

function Results({results}) {
  console.log(results)
  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4    '>
      {results.map(item=>
        (<Thumbnail key={item.id} data={item}/>)
        )}
    </div>
  )
}

export default Results
