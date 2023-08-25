import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import fadeIn from '../../functions/variants'
import { useModalContext } from '../../functions/modalContext'

ProjectsCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
    linkGithub: PropTypes.string.isRequired,
    linkHosting: PropTypes.string.isRequired,
    iconGithub: PropTypes.node.isRequired,
    iconHosting: PropTypes.node.isRequired,
    imgPreview: PropTypes.string.isRequired,
    imgModal: PropTypes.string,
}

export default function ProjectsCard({
    id,
    name,
    description,
    stack,
    linkGithub,
    linkHosting,
    iconGithub,
    iconHosting,
    imgPreview,
    imgModal,
}) {
    const { openModal } = useModalContext()
    return (
        <>
            <motion.div
                id={id}
                variants={fadeIn('up', 0.3, 0.1)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className="w-92 lg:w-96"
            >
                <motion.div className="sm:w-96 border rounded-lg overflow-hidden hover:border-yellow-700 transition-all duration-1000">
                    <motion.div
                        variants={fadeIn('right', 0.9)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className="overflow-hidden cursor-pointer"
                        onClick={() => openModal({id, name, description, stack, linkGithub, linkHosting, iconGithub, iconHosting, imgPreview, imgModal})}
                    >
                        <img
                            src={imgPreview}
                            alt={name}
                            className="w-96 h-64 sm:h-72 rounded-t-lg object-cover hover:scale-110 transition-all duration-700"
                        />
                    </motion.div>
                    <div className="flex items-end">
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
                </motion.div>
            </motion.div>
        </>
    )
}
