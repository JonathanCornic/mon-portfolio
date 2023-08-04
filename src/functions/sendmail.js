import axios from 'axios'
import { brevoConfig } from '../config/brevo-config'

export default async function Sendmail() {
    const emailData = {
        sender: { email: brevoConfig.senderEmail },
        to: [{ email: brevoConfig.recipientEmail }],
        subject: 'PORTFOLIO - Formulaire de contact',
        htmlContent: `<html><head></head><body><p>Hello,</p><p>Un formulaire de contact a été envoyé.</p></body></html>`,
    }

    const headers = {
        Accept: 'application/json',
        'api-key': brevoConfig.apiKey,
        'Content-Type': 'application/json',
    }

    try {
        await axios.post(brevoConfig.brevoURL, emailData, { headers })
    } catch (error) {
        return
    }
}
