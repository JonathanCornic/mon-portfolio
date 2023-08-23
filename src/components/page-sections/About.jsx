import Image from '../../medias/images/my-profil-img.webp'
import { motion } from 'framer-motion'
import fadeIn from '../../variants'
export default function About() {
    return (
        <section id="A propos" className="section py-20 my-20">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-20">
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 mix-blend-lighten"
                    >
                        <img src={Image} alt="photo de mon profil" className='w-[100%] h-[100%]'/>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1"
                    >
                        <h2 className="mb-10 lg:mb-20">A propos de moi</h2>
                        <p className="">
                            Enchanté, je suis{' '}
                            <span className="text-gradient">
                                Jonathan Cornic
                            </span>
                            , un développeur web passionné avec une expertise
                            particulière en React. Mon voyage dans le monde du
                            développement a débuté il y a plusieurs mois, et
                            depuis, je suis tombé amoureux de la création
                            d&apos;expériences interactives et intuitives sur le
                            Web.
                        </p>
                        <br />
                        <p className="">
                            Au fil du temps, j&apos;ai eu l&apos;occasion de
                            travailler sur une multitude de projets, allant des
                            petites applications aux systèmes web complexes.
                            Cette diversité m&apos;a permis d&apos;affiner mes
                            compétences et de m&apos;adapter à différentes
                            situations, tout en conservant un engagement
                            constant envers la qualité et l&apos;efficacité du
                            code.
                        </p>
                        <br />
                        <p className="">
                            En tant que développeur, je suis toujours avide
                            d&apos;apprendre et de rester à l&apos;affût des
                            dernières tendances et des meilleures pratiques du
                            secteur. Je suis convaincu que l&apos;apprentissage
                            continu est la clé pour rester pertinent et offrir
                            des solutions innovantes à mes clients.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
