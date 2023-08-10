import GithubButton from '../elements/GithubButton'
import ProjectsCard from '../elements/ProjectsCard'
import { motion } from 'framer-motion'
import fadeIn from '../../variants'
export default function Projects() {
    return (
        <div id="Projets" className="section">
            <div className="container mx-auto flex flex-col items-center">
                <motion.div
                    variants={fadeIn('down', 0.3)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-center"
                >
                    <h2 className="">Mes derniers Projets</h2>
                    <p className="py-10">
                        Voici les derniers projets que j&apos;ai pu éffectuer,
                        vous pouvez retrouver l&apos;ensemble de mes travaux en cliquant sur le bouton
                    </p>
                    <div className="btn w-24 mx-auto mb-10">
                        <GithubButton />
                    </div>
                </motion.div>
                <div className="flex flex-col gap-y-10 xl:flex-row xl:gap-x-10">
                    <ProjectsCard />
                </div>
            </div>
        </div>
    )
}
