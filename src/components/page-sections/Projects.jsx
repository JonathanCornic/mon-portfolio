import links from '../../data/socialLinksData'
import ProjectsCard from '../elements/ProjectsCard'
export default function Projects() {
    return (
        <div id="Projets" className="section">
            <div className="container mx-auto flex flex-col items-center">
                <div className="text-center">
                    <h2 className=''>Mes derniers Projets</h2>
                    <p className='py-10'>
                        Voici les derniers projets que j&apos;ai pu éffectuer,
                        vous pouvez retrouver l&apos;ensemble de mes travaux ici
                    </p>
                    <div className="btn w-24 mx-auto mb-10">
                        {links
                            .filter((link) => link.id === 2)
                            .map(({ id, child, name, href }) => (
                                <a
                                    key={id}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-center items-center gap-x-2"
                                >
                                    <span>{name}</span>
                                    <span>{child}</span>
                                </a>
                            ))}
                    </div>
                </div>
                <div className="flex flex-col gap-y-10 xl:flex-row xl:gap-x-10">
                    <ProjectsCard />
                </div>
            </div>
        </div>
    )
}
