
import Link from 'next/link'
import React from 'react'

const navli = [
  {label:"coinVers", path:"/header/static/coinVers"},
  {label:"hondaHighness", path:"/header/static/highness" },
  {label:"item-3", path:"../app/components/errorInformation.tsx"}
]

const pageStatic = () => {
  return (
    <div className='p-3 sm:p-8'>
      <h1 className='text-md sm:text-2xl'>Static designs</h1>
      <ol className='ml-2 list-decimal list-inside'>
        {navli.map(({label, path}) => (
          <li key={label}>
            <Link href={path} className='hover:text-blue-600'> {label}</Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default pageStatic