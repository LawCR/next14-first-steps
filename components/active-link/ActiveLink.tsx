"use client"
import Link from "next/link"
import style from './ActiveLink.module.css'
import { usePathname } from "next/navigation"

interface Props {
    path: string
    label: string
}

export const ActiveLink = ({ label, path }: Props) => {

  const pathName = usePathname()

  return (
    <Link 
      className={`${style.link} ${pathName === path ? style['active-link'] : ''}`} 
      href={path}
      // prefetch={false}
    >
      {label}
    </Link>
  )
}
