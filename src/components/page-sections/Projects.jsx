import { motion } from 'framer-motion'
import fadeIn from '../../functions/variants'
import SocialButton from '../elements/SocialButton'
import links from '../../data/socialLinksData'
import ProjectsCard from '../elements/ProjectsCard'
import projects from '../../data/projectsData'

export default function Projects() {
    return (
        <div id="Projets" className="section py-20 my-20">
            <div className="container mx-auto flex flex-col items-center">
                <motion.div
                    variants={fadeIn('down', 0.3)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-center"
                >
                    <h2>Mes derniers Projets</h2>
                    <p className="py-10">
                        Voici les derniers projets que j&apos;ai pu éffectuer,
                        vous pouvez retrouver l&apos;ensemble de mes travaux en
                        cliquant sur le bouton
                    </p>
                    <div className="btn w-24 mx-auto mb-10">
                        {links
                            .filter((link) => link.id === 'social002')
                            .map(({ id, child, name, href }) => (
                                <SocialButton
                                    key={id}
                                    id={`projectsSocialButton_${id}`}
                                    name={name}
                                    child={child}
                                    href={href}
                                />
                            ))}
                    </div>
                </motion.div>
                <div className="flex flex-col gap-y-10 xl:flex-row xl:gap-x-10">
                    {projects.map((item) => (
                        <ProjectsCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            stack={item.stack}
                            linkGithub={item.linkGithub}
                            linkHosting={item.linkHosting}
                            iconGithub={item.iconGithub}
                            iconHosting={item.iconHosting}
                            imgPreview={item.imgPreview}
                            imgModal={item.imgModal}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
