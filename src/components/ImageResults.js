import React from 'react'
import Pagination from './Pagination'

export default function ImageResults({results}) {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4 space-y-8">
        {
          results?.items?.map((result) => (
            <div key={result.link} className="">
              <div className="group">
                <a href={result.image.contextLink}>
                  <img className="group-hover:shadow-xl w-full h-60 object-contain" src={result.link} alt={result.title} />
                </a>
                <a href={result.contextLink} className="group-hover:underline">
                    <h2 className="truncate text-xl">{result.title}</h2>
                </a>
                <a href={result.contextLink} className="group-hover:underline">
                  <p className="text-gray-600">{result.displayLink}</p>
                </a>
              </div>
            </div>
          ))
        }
      </div>
      <div className="ml-60">
        <Pagination/>
      </div>
    </div>
  )
}
