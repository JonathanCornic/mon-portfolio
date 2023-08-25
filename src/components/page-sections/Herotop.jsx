import BgImage from '../../medias/images/bg-hero.webp'
import Logo from '../../medias/svg/personal-logo-bg-trans.svg'
import SocialLinks from '../elements/SocialLinks'
import links from '../../data/socialLinksData'
import { motion } from 'framer-motion'
import fadeIn from '../../functions/variants'

export default function Herotop() {
    return (
        <section
            id="Accueil"
            className="section py-20 mb-20"
            style={{
                backgroundImage: `url(${BgImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <div className="min-w-[90%] min-h-[90%] p-5 flex flex-col items-center justify-center text-center lg:text-left">
                <div className="flex flex-col lg:flex-row w-full items-center justify-around xl:p-16 mix-blend-lighten">
                    <div className="max-w-[700px] z-10">
                        <motion.div
                            variants={fadeIn('right', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <h1>
                                Développement web{' '}
                                <span className="text-gradient whitespace-nowrap">
                                    Front-end
                                </span>
                            </h1>
                        </motion.div>
                        <motion.p
                            variants={fadeIn('up', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }}
                            className="py-3"
                        >
                            Créer des applications web modernes avec React pour
                            une interface interactive et utiliser Tailwind CSS
                            pour styliser efficacement.
                        </motion.p>
                    </div>
                    <motion.div
                        variants={fadeIn('down', 0.7)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className="h-full"
                    >
                        <img
                            src={Logo}
                            alt="mon logo"
                            className="object-cover mx-auto bg-primary w-44 h-44 md:w-64 md:h-64 lg:w-76 lg:h-76 xl:w-96 xl:h-96"
                        />
                    </motion.div>
                </div>
                <div className="mt-10">
                    <div className="2xl:flex 2xl:flex-col 2xl:top-[42%] 2xl:left-0 2xl:fixed">
                        <ul className="flex 2xl:block">
                            {links.map(
                                ({ id, child, name, href, download }) => (
                                    <SocialLinks
                                        key={id}
                                        id={id}
                                        child={child}
                                        name={name}
                                        href={href}
                                        download={download}
                                    />
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
