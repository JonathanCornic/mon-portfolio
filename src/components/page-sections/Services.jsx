import services from '../../data/serviceData'
import { motion } from 'framer-motion'
import fadeIn from '../../variants'
export default function Services() {
    return (
        <div id="Services" className="section py-20 my-20">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:items-center">
                    <motion.div
                        variants={fadeIn('down', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1"
                    >
                        <h2>Mes services</h2>
                        <p>
                            Expérience et Expertise au Service de Votre Vision
                        </p>
                        <h3 className="py-5">Ma stack téchnologique</h3>
                        <ul className="flex gap-x-1 flex-wrap">
                            <li>MongoDB</li>
                            <li>ExpressJS</li>
                            <li>React</li>
                            <li>NodeJS</li>
                            <li>tailwindCSS</li>
                            <li>firebase</li>
                        </ul>
                        <h3 className="py-5">Prochainement</h3>
                        <ul>
                            <li>Typescript</li>
                            <li>NextJS</li>
                        </ul>
                    </motion.div>
                    <div className="flex-1">
                        <ul>
                            {services.map(({ id, name, description }) => {
                                return (
                                    <motion.li
                                        key={id}
                                        variants={fadeIn('up', 0.3)}
                                        initial="hidden"
                                        whileInView={'show'}
                                        viewport={{ once: false, amount: 0.3 }}
                                        className="border-b"
                                    >
                                        <h3 className="py-3">{name}</h3>
                                        <p className="pb-3">{description}</p>
                                    </motion.li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
