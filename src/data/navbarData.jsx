import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'


const links = [
    {
        id: "nav001",
        link: 'Accueil',
        icon: <BiHomeAlt className="w-4 h-4" />,
    },
    {
        id: "nav002",
        link: 'A propos',
        icon: <BiUser className="w-4 h-4" />,
    },
    {
        id: "nav003",
        link: 'Services',
        icon: <BsClipboardData className="w-4 h-4" />,
    },
    {
        id: "nav004",
        link: 'Projets',
        icon: <BsBriefcase className="w-4 h-4" />,
    },
    {
        id: "nav005",
        link: 'Contact',
        icon: <BsChatSquare className="w-4 h-4" />,
    },
]
 export default links