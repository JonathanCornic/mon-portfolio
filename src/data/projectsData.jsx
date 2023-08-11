import { FaGithub } from 'react-icons/fa'
import { AiFillProfile } from 'react-icons/ai'
import ImageProjet1 from '../medias/images/previewProjectsImg/test.webp'
import ImageProjet2 from '../medias/images/previewProjectsImg/test.webp'
import ImageProjet3 from '../medias/images/previewProjectsImg/test.webp'

const projets = [
    {
        id: 1,
        name: 'kasa',
        imgPreview: ImageProjet1,
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
        imgPreview: ImageProjet2,
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
        imgPreview: ImageProjet3,
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

export default projets