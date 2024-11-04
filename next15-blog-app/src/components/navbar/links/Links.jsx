import Link from 'next/link'
import React from 'react'
import styles from "./links.module.css"
import NavLink from './navLink/navLink'
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
    <div className={styles.links}>
          {Links.map((link) => (
              <NavLink link={link} key={link.title}>{link.title}</NavLink>
          ))}
    </div>
  )
}
