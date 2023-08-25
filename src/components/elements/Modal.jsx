import { useModalContext } from '../../functions/modalContext'
import { motion } from 'framer-motion'
import fadeIn from '../../functions/variants'

export default function Modal() {
    const { isModalOpen, closeModal, selectedProject } = useModalContext()
    console.log(selectedProject)
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
            <div className="bg-black rounded-lg max-w-[1000px] w-[95%] z-50 flex flex-col justify-center items-center md:p-10 text-center">
                <div className="rounded-t-lg w-full">
                    <h2>{selectedProject.name}</h2>
                    <div className='w-full max-h-40 flex justify-center mt-10 overflow-y-scroll md:max-h-72 xl:max-h-96'>
                        <img
                            src={selectedProject.imgModal}
                            alt={selectedProject.name}
                            className='object-cover w-[80%] h-[80%]'
                        />
                    </div>
                </div>
                <div className="rounded-b-lg w-full flex flex-col justify-around">
                    <div className="h-40 flex flex-col justify-center gap-y-5">
                        <p>{selectedProject.description}</p>
                        <p>Réalisé avec {selectedProject.stack}</p>
                    </div>
                    <div className="flex rounded-b-lg justify-around h-16 items-center">
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
