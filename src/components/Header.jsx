import { useState } from 'react';
import { IoMenu } from "react-icons/io5";


const navBar = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Projects', link: '#projects' },
    { name: 'Skills', link: '#skills' },
    { name: 'Educations', link: '#educations' }
]

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const mobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <header className="relative bg-blue-600 text-white p-4">
            <div className="flex items-center justify-between">
                <span className="cursor-pointer">Laxman CR</span>

                {/* Desktop Navigation Bar */}
                <nav className="sm:flex hidden items-center justify-between *:rounded-md *:mr-4 *:hover:bg-white *:hover:text-black *:px-2 *:hover:cursor-pointer">
                    {
                        navBar.map((item) => (
                            <div key={item.name}>{item.name}</div>
                        ))
                    }
                </nav>

                {/* Mobile Navigation Bar */}
                <span className="sm:hidden cursor-pointer" onClick={mobileMenu}><IoMenu /></span>
                {isMenuOpen && <nav className="bg-blue-600 absolute top-full right-0 flex flex-col items-center justify-between p-5 *:rounded-md *:hover:bg-white *:hover:text-black *:px-2 *:m-2 *:hover:cursor-pointer">
                    {
                        navBar.map((item) => (
                            <span key={item.name}>{item.name}</span>
                        ))
                    }
                </nav>
                }
            </div>
        </header>
    )
}