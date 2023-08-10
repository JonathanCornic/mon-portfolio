import useContactForm from '../../functions/useContactForm'
import { motion } from 'framer-motion'
import fadeIn from '../../variants'

export default function Contact() {
    const { formData, handleChange, handleSubmit } = useContactForm()

    return (
        <section id="Contact" className="section">
            <div className="container mx-auto 2xl:px-40">
                <div className="flex flex-col lg:flex-row py-10">
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 flex flex-col items-start justify-center py-5"
                    >
                        <h2>Un projet ?</h2>
                        <p className="text-3xl lg:text-6xl xl:text-7xl">
                            Travaillons <br /> ensemble!
                        </p>
                    </motion.div>
                    <motion.form
                        onSubmit={handleSubmit}
                        variants={fadeIn('left', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 border rounded-2xl flex flex-col gap-y-6 p-5 pb-10"
                    >
                        <div className="w-full">
                            <label htmlFor="name" className="invisible">
                                Nom:
                            </label>
                            <input
                                className="bg-transparent border-b py-3 outline-none w-full focus:border-yellow-700 transition-all duration-1000"
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Votre nom"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="email" className="invisible">
                                Email:
                            </label>
                            <input
                                className="bg-transparent border-b py-3 outline-none w-full focus:border-yellow-700 transition-all duration-1000 "
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Votre email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="message" className="invisible">
                                Message:
                            </label>
                            <textarea
                                className="bg-transparent border-b py-3 outline-none w-full focus:border-yellow-700 transition-all duration-1000"
                                id="message"
                                name="message"
                                placeholder="Votre message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="btn"
                            >
                                Envoyer
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}
