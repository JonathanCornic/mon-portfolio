import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'


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
 export default links