/* eslint-disable react/prop-types */
import React from 'react'

const Pagination = props => {
  const { hasNext, hasPrevious, forwardClick, backwardClick } = props
  let content
  if (hasNext) {
    content = <button className="mr-6 w-40 flex gap-x-6 justify-center bg-blue-500 py-3 font-bold text-xl" onClick={forwardClick}>Next</button>
  } else if (hasPrevious) {
    content = <button className="w-40 flex gap-x-6 justify-center bg-blue-500 py-3 font-bold text-xl" onClick={backwardClick}>Previous</button>
  } else if (hasNext && hasPrevious) {
    content = <><button className="mr-6 w-40 flex gap-x-6 justify-center bg-blue-500 py-3 font-bold text-xl" onClick={forwardClick}>Next</button><button className="mr-6 w-40 flex gap-x-6 justify-center bg-blue-500 py-3 font-bold text-xl" onClick={backwardClick}>Previous</button> </>
  } else {
    content = null
  }

  return (
    <div className="flex mt-4">
      {content}
    </div>
  )
}

export default Pagination

/* {(hasNext, hasPrevious) => {
    if (hasNext) {
    <button className="mr-6 w-40 flex gap-x-6 justify-center bg-blue-500 py-3 font-bold text-xl">Previous</button>
    } else if (hasPrevious) {
    <button className="w-40 flex gap-x-6 justify-center bg-blue-500 py-3 font-bold text-xl">Next</button>
    } else {
    <>
        <button className="mr-6 w-40 flex gap-x-6 justify-center bg-blue-500 py-3 font-bold text-xl">Previous</button>
        <button className="w-40 flex gap-x-6 justify-center bg-blue-500 py-3 font-bold text-xl">Next</button>
    </>
    }
}} */
