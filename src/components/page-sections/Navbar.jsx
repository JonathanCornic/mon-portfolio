import { useState } from 'react'
import { Link } from 'react-scroll'
import Logo from '../../medias/svg/personal-logo-bg-trans.svg'
import links from '../../data/navbarData'

export default function Navbar() {

    const [activeSection, setActiveSection] = useState('Accueil')

    return (
        <nav className="fixed z-50 w-full px-2 lg:px-0 lg:mix-blend-exclusion lg:backdrop-blur-sm max-w-[2560px]">
            <div className="min-w-[250px] max-w-[420px] mx-auto rounded-full bg-black/50 backdrop-blur-sm px-3 py-2 mt-4 flex items-center justify-center lg:justify-between lg:bg-inherit lg:rounded-none lg:mt-0 lg:max-w-full">
                <div className="cursor-pointer bg-primary hidden hover:bg-gradient lg:block ">
                    <Link to="Accueil" smooth={true} duration={500}>
                        <img src={Logo} alt="mon logo" className='w-14 h-14' />
                    </Link>
                </div>
                <ul className="flex">
                    {links.map(({ id, link, icon }) => (
                        <li
                            key={id}
                            className={`relative z-50 text-primary text-xl px-3 py-3 mx-1 rounded-full cursor-pointer hover:scale-110 duration-300 hover:text-gradient md:mx-4 ${
                                link === activeSection ? 'active' : ''
                            }`}
                        >
                            <Link
                                to={link}
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onSetActive={() => setActiveSection(link)}
                            >
                                <span className="lg:hidden">{icon}</span>
                                <span className="hidden lg:inline-block">
                                    {link}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
