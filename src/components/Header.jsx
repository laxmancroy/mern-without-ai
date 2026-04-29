const navBar = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Projects', link: '#projects' },
    { name: 'Skills', link: '#skills' },
    { name: 'Educations', link: '#educations' }
]

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 bg-blue-600 text-white p-4">
            <div className="flex items-center justify-between">
                <span className="cursor-pointer">Laxman CR</span>

                {/* Desktop Navigation Bar */}
                <nav className="flex items-center justify-between *:rounded-md *:mr-4 *:hover:bg-white *:hover:text-black *:px-2 *:hover:cursor-pointer">
                    {
                        navBar.map((item) => (
                            <span key={item.name}>{item.name}</span>
                        ))
                    }
                </nav>
            </div>
        </header>
    )
}