import Link from "next/link"
import style from '../styles/A.module.css'

function A({text, href}) {
  return (
    <Link className={style.link} href={href}>{text}</Link>
  )
}

export default A