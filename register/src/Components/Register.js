import React from 'react'
import PasswordGenerator from './PasswordGenerator'
import TextForm from './ColForm'

function Register({ fn }) {
    return (
        <>
            <h1><center><u>User Registration</u></center></h1>

            <TextForm />
            <PasswordGenerator fn={fn} />

        </>
    )
}

export default Register