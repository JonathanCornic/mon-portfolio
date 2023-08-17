import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const links = [
    {
        id: 'social001',
        name: 'LinkedIn',
        child: (
            <>
                <FaLinkedin size={30} aria-label="Lien vers mon linkedin" />
            </>
        ),
        href: 'https://www.linkedin.com/in/jonathan-cornic-024607262/',
    },
    {
        id: 'social002',
        name: 'Github',
        child: (
            <>
                <FaGithub size={30} aria-label="Lien vers mon github" />
            </>
        ),
        href: 'https://github.com/JonathanCornic',
    },
    {
        id: 'social003',
        name: 'CV',
        child: (
            <>
                <BsFillPersonLinesFill
                    size={30}
                    aria-label="Telecharger mon cv"
                />
            </>
        ),
        href: '/cv.pdf',
        download: true,
    },
]

export default links
