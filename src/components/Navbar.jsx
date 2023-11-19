import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const navItems=[
        {
            path: "/home",
            link: "Home",
    
          },
          {
            path: "/blogs",
            link: "Blog",
    
          },
          {
            path: "/services",
            link: "Services",
    
          },
          {
            path: "/contacts",
            link: "Contacts",
    
          },
    ]
  return (
   <header>
    <nav>
    <Link to="" className='px-4 py-4 text-lg font-bold bg-green-300'>Stanleys <span className='px-4 py-4 text-lg font-bold bg-red-300'>Blog</span></Link>
    </nav>
   </header>
  )
}

export default Navbar