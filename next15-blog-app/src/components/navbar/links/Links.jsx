
import React from 'react'
import styles from "./links.module.css"
import NavLink from './navLink/navLink'


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
export default function Links() {
 const [open, setOpen] = useState(false);
   
    let session = true;
    let isAdmin = true;

    return (
       <div className={styles.container}>
    <div className={styles.links}>
          {Links.map((link) => (
              <NavLink link={link} key={link.title}>{link.title}</NavLink>
          ))}{
              session ? (
                  <>{
                      isAdmin && (
                          <NavLink link={{ title: "Admin", path: "/admin" }} />
                      )}
                      <button className={styles.logout}>Logout</button>
                  </>
              ) : (
                      <NavLink link={{title: "Login",path :"/login"}} />
          
              )
          }
            </div>
            <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>{
                 open && (
        <div className={styles.mobileLinks}>
          {Links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
            </div>
  )
}
