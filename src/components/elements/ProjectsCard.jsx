import { FaGithub } from 'react-icons/fa'
import { AiFillProfile } from 'react-icons/ai'
const projets = [
    {
        id: 1,
        name: 'kasa',
        iconGithub: (
            <>
                <FaGithub size={30} />
            </>
        ),
        iconHosting: (
            <>
                <AiFillProfile size={30} />
            </>
        ),
        linkGithub: 'https://github.com/JonathanCornic/kasa',
        linkHosting: 'https://kasa-2m0.pages.dev/',
    },
    {
        id: 2,
        name: 'burger-house',
        iconGithub: (
            <>
                <FaGithub size={30} />
            </>
        ),
        iconHosting: (
            <>
                <AiFillProfile size={30} />
            </>
        ),
        linkGithub: 'https://github.com/JonathanCornic/burger-house',
        linkHosting: 'https://burger-house.pages.dev/',
    },
    {
        id: 3,
        name: 'portfolio-nina-carducci',
        iconGithub: (
            <>
                <FaGithub size={30} />
            </>
        ),
        iconHosting: (
            <>
                <AiFillProfile size={30} />
            </>
        ),
        linkGithub: 'https://github.com/JonathanCornic/Portfolio-nina-carducci',
        linkHosting: 'https://portfolio-nina-carducci.pages.dev/',
    },
]

export default function ProjectsCard() {
    return (
        <>
            {projets.map(
                ({
                    id,
                    name,
                    linkGithub,
                    linkHosting,
                    iconGithub,
                    iconHosting,
                }) => (
                    <div
                        key={id}
                        name={name}
                        className="w-96 h-72 border flex items-end rounded-lg"
                    >
                        <a
                            href={linkGithub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-100%"
                        >
                            <div className="hover:bg-gradient flex-1 w-full h-16 rounded-bl-lg">
                                <div className="flex justify-center items-center h-full">
                                    {iconGithub}
                                </div>
                            </div>
                        </a>
                        <a
                            href={linkHosting}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-100%"
                        >
                            <div className="hover:bg-gradient flex-1 w-full h-16 rounded-br-lg">
                                <div className="flex justify-center items-center h-full">
                                    {iconHosting}
                                </div>
                            </div>
                        </a>
                    </div>
                )
            )}
        </>
    )
}
