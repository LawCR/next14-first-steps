import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from ".."


const navItems = [
    { path: '/about', label: 'About' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' },
]

export const Navbar = async() => {
    
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
        <Link href="/" className="flex items-center">
            <HomeIcon  size={21} className='mr-2' />
            <span>Home</span>
        </Link>

        <div className='flex flex-1' />
        {
            navItems.map(({ path, label }) => (
                <ActiveLink key={path} label={label} path={path} />
            ))
        }
        {/* <Link className='mr-2' href="/about">About</Link>
        <Link className='mr-2' href="/pricing">Pricing</Link>
        <Link className='mr-2' href="/contact">Contact</Link> */}
    </nav>
  )
}
6