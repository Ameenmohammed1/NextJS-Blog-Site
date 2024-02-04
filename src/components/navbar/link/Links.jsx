import Link from "next/link"
import styles from './links.module.css'
const Links = ({}) => {
    const link = [
        {
            title : "Home",
            path : "/"
        },
        {
            title : "Blog",
            path : "/blog"
        },
        {
            title : "About US",
            path : "/about"
        },
        {
            title : "Contact Us",
            path : "/contact"
        },
        
    ]
  return <div className={styles.links}> 
    {
        link.map((link,i)=>{
            return(<Link className="px-[10px] transition-all hover:bg-white hover:text-[#000] py-[5px] hover:rounded-full" key={i} href={link.path}>{link.title}</Link>)
        })
    }
    
  </div>
}

export default Links