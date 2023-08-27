import { useModalContext } from '../../functions/modalContext'
import { motion } from 'framer-motion'
import fadeIn from '../../functions/variants'

export default function Modal() {
    const { isModalOpen, closeModal, selectedProject } = useModalContext()
    if (!selectedProject) {
        return null
    }

    return (
        <motion.div
            variants={fadeIn('', 0.3, 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className={`fixed inset-0 z-50 flex justify-center items-center ${
                isModalOpen ? 'block' : 'hidden'
            }`}
        >
            <div
                className="bg-gray-900 opacity-80 absolute inset-0"
                onClick={closeModal}
            ></div>
            <div className="bg-black rounded-lg max-w-[1000px] w-[95%] max-h-[90%] z-50 flex flex-col justify-center items-center p-5 text-center">
                <div className="rounded-t-lg w-full">
                    <h2>{selectedProject.name}</h2>
                    <div className='w-full max-h-32 flex justify-center my-2 overflow-y-scroll md:max-h-72 xl:max-h-96 lg:my-5'>
                        <img
                            src={selectedProject.imgModal}
                            alt={selectedProject.name}
                            className='object-cover w-[60%] h-[60%] md:w-[80%] md:h-[80%]'
                        />
                    </div>
                </div>
                <div className="rounded-b-lg w-full flex flex-col justify-around">
                    <div className="max-h-40 flex flex-col justify-center gap-y-2 lg:gap-y-5">
                        <p>{selectedProject.description}</p>
                        <p>Réalisé avec {selectedProject.stack}</p>
                    </div>
                    <div className="flex rounded-b-lg justify-around max-h-16 items-center mt-2 lg:mt-5">
                        <a
                            href={selectedProject.linkGithub}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div>{selectedProject.iconGithub}</div>
                        </a>
                        <a
                            href={selectedProject.linkHosting}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div>{selectedProject.iconHosting}</div>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
