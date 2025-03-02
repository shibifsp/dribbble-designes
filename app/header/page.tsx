
import Link from 'next/link'
import React from 'react'



const navItems = [
  {label: "Static", path: "/header/static"},
  {label: "Dynamic", path: "/header/Dynamic"},
  {label: "Simple", path: "/header/simple"}
];

const Header = () => {


  return (
    <div className="my-3 mx-auto w-5/6 sm:w-3/6">
      <ul className="flex items-center justify-between p-4">
        {navItems.map(({label, path}) => (
          <li key={label} className="font-bold text-sm sm:text-base hover:text-blue-600">
           <Link href={path}>
              {label}
           </Link>
          </li>  
        ))}
      </ul>
    </div>
  )
}

export default Header