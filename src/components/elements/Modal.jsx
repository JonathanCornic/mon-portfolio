import { useModalContext } from '../../functions/modalContext'
import { motion } from 'framer-motion'
import fadeIn from '../../variants'
export default function Modal() {
    const { isModalOpen, closeModal } = useModalContext()

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
            <div className="bg-white rounded-lg max-w-[1000px] w-[95%] z-50 flex flex-col justify-center items-center">
                <div className="flex1 rounded-t-lg w-full h-96 bg-red-500"></div>
                <div className="flex1 rounded-b-lg w-full h-96 bg-blue-500"></div>
            </div>
        </motion.div>
    )
}
