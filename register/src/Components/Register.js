import React from 'react'
import PasswordGenerator from './PasswordGenerator'
import TextForm from './ColForm'

function Register({ fn }) {
    return (
        <>
            <div id= "Title"><h1><center><u>User Registration</u></center></h1></div>
            <br/><br/>
            <TextForm />
            <PasswordGenerator fn={fn} />

        </>
    )
}

export default Register