import { useState } from 'react'
import { Link } from 'react-scroll'
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'
import Logo from '../../medias/svg/personal-logo-bg-trans.svg'

export default function Navbar() {
    const links = [
        {
            id: 1,
            link: 'Accueil',
            icon: <BiHomeAlt className="w-4 h-4" />,
        },
        {
            id: 2,
            link: 'A propos',
            icon: <BiUser className="w-4 h-4" />,
        },
        {
            id: 3,
            link: 'Services',
            icon: <BsClipboardData className="w-4 h-4" />,
        },
        {
            id: 4,
            link: 'Projets',
            icon: <BsBriefcase className="w-4 h-4" />,
        },
        {
            id: 5,
            link: 'Contact',
            icon: <BsChatSquare className="w-4 h-4" />,
        },
    ]

    const [activeSection, setActiveSection] = useState('Accueil')

    return (
        <nav className="fixed z-50 w-full px-2 lg:mix-blend-exclusion">
            <div className="min-w-[250px] max-w-[420px] mx-auto rounded-full bg-black/50 backdrop-blur-sm px-3 py-2 mt-4 flex items-center justify-center lg:justify-between lg:bg-inherit lg:rounded-none lg:mt-0 lg:max-w-full">
                <div className="w-8 h-8 cursor-pointer bg-white hidden lg:block lg:w-14 lg:h-14">
                    <Link to="Accueil" smooth={true} duration={500}>
                        <img src={Logo} alt="mon logo" />
                    </Link>
                </div>
                <ul className="flex">
                    {links.map(({ id, link, icon }) => (
                        <li
                            key={id}
                            className={`relative z-50 text-white text-xl px-3 py-3 mx-1 rounded-full cursor-pointer hover:scale-110 duration-300 md:mx-4 ${
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
