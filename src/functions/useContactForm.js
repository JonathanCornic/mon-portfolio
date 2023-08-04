import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import db from '../config/firebase-config'
import Sendmail from './sendmail'

export default function useContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    }

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            const docRef = await addDoc(collection(db, 'contacts'), {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            })

            await Sendmail()

            alert('Votre message a bien été envoyé', docRef.id)
        } catch (error) {
            alert('Une erreur est survenue')
        }

        console.log(formData)
        // Réinitialiser les champs après la soumission
        setFormData({ name: '', email: '', message: '' })
    }
    return { formData, handleChange, handleSubmit }
}
