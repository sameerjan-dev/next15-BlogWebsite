"use client"

import Link from 'next/link'
import React from 'react'
import styles from './navLink.module.css'
import { usePathname } from 'next/navigation'

export default function NavLink({ link }) {
    
    const pathname = usePathname();
  return (

      <Link href={link.path} className={`${styles.container} ${pathname===link.path && styles.active}`}>{link.title}</Link>
 
  )
}
