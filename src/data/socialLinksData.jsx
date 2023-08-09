import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const links = [
    {
        id: 1,
        name: 'LinkedIn',
        child: (
            <>
                <FaLinkedin size={30} />
            </>
        ),
        href: 'https://www.linkedin.com/in/jonathan-cornic-024607262/',
    },
    {
        id: 2,
        name: 'Github',
        child: (
            <>
                <FaGithub size={30} />
            </>
        ),
        href: 'https://github.com/JonathanCornic',
    },
    {
        id: 3,
        name: 'CV',
        child: (
            <>
                <BsFillPersonLinesFill size={30} />
            </>
        ),
        href: '',
        download: true,
    },
]

export default links
