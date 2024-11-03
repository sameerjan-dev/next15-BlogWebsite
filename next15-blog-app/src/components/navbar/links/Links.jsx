import Link from 'next/link'
import React from 'react'

export default function Links() {

    const Links = [
        {
        title : "HomePage",
        path:"/"
    },
           {
        title : "About",
        path:"/about"
    } ,  {
        title : "Contact",
        path:"/contact"
    },   {
        title : "Blog",
        path:"/blog"
    }
]
  return (
    <div>
          {Links.map((link) => (
              <Link href={link.path} key={link.title}>{link.title}</Link>
          ))}
    </div>
  )
}
