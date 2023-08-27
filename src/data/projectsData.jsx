import { FaGithub } from 'react-icons/fa'
import { AiFillProfile } from 'react-icons/ai'
import ImageProjet1 from '../medias/images/previewProjectsImg/kasa-preview.webp'
import ImageModale1 from '../medias/images/modalProjectsImg/kasa-modal.webp'
import ImageProjet2 from '../medias/images/previewProjectsImg/burger-house-preview.webp'
import ImageModale2 from '../medias/images/modalProjectsImg/burger-house-modal.webp'
import ImageProjet3 from '../medias/images/previewProjectsImg/nina-carducci-preview.webp'
import ImageModale3 from '../medias/images/modalProjectsImg/nina-carducci-modal.webp'

const projets = [
    {
        id: 'projet001',
        name: 'kasa',
        description: "Création d'un site de location immobilière",
        stack: 'React, CSS',
        imgPreview: ImageProjet1,
        imgModal: ImageModale1,
        iconGithub: (
            <>
                <FaGithub
                    size={30}
                    aria-label="Lien vers le dépôt GitHub du projet kasa"
                />
            </>
        ),
        iconHosting: (
            <>
                <AiFillProfile
                    size={30}
                    aria-label="Lien vers l'hébergement du projet kasa"
                />
            </>
        ),
        linkGithub: 'https://github.com/JonathanCornic/kasa',
        linkHosting: 'https://kasa-2m0.pages.dev/',
    },
    {
        id: 'projet002',
        name: 'burger-house',
        description: "integration d'une landing page d'un site de fast food",
        stack: 'React, Tailwind CSS',
        imgPreview: ImageProjet2,
        imgModal: ImageModale2,
        iconGithub: (
            <>
                <FaGithub
                    size={30}
                    aria-label="Lien vers le dépôt GitHub du projet burger-house"
                />
            </>
        ),
        iconHosting: (
            <>
                <AiFillProfile
                    size={30}
                    aria-label="Lien vers l'hébergement du projet burger-house"
                />
            </>
        ),
        linkGithub: 'https://github.com/JonathanCornic/burger-house',
        linkHosting: 'https://burger-house.pages.dev/',
    },
    {
        id: 'projet003',
        name: 'portfolio-nina-carducci',
        description: 'Débug et optimisation du portfolio de nina carducci',
        stack: 'Javascript, CSS, HTML',
        imgPreview: ImageProjet3,
        imgModal: ImageModale3,
        iconGithub: (
            <>
                <FaGithub
                    size={30}
                    aria-label="Lien vers le dépôt GitHub du projet portfolio-nina-carducci"
                />
            </>
        ),
        iconHosting: (
            <>
                <AiFillProfile
                    size={30}
                    aria-label="Lien vers l'hébergement du projet portfolio-nina-carducci"
                />
            </>
        ),
        linkGithub: 'https://github.com/JonathanCornic/Portfolio-nina-carducci',
        linkHosting: 'https://portfolio-nina-carducci.pages.dev/',
    },
]

export default projets
