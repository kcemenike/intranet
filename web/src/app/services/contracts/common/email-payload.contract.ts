
export interface EmailRequestPayload {
    to: string
    type: string | 'BaseNotification'
    subject: string
    greeting: string
    error: boolean
    message: string[][]
}

export interface EmailResponsePayload {
    sent: boolean
}