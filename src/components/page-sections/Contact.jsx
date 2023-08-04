import useContactForm from '../../functions/useContactForm'

export default function Contact() {
    const { formData, handleChange, handleSubmit } = useContactForm()

    return (
        <form onSubmit={handleSubmit} className="section" id="Contact">
            <div>
                <label htmlFor="name">Nom:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Entrez votre email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Entrez votre message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <button type="submit">Envoyer</button>
            </div>
        </form>
    )
}
