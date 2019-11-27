import React from 'react'

export default function User() {
    return (
        <main>
            <h1>Váš účet</h1>
            <form className="login">
                <p>Email:</p>
                <input type="email" />
                <p>Heslo:</p>
                <input type="password" />
                <input type="submit" value="Registrovat" className="login-button"/>
            </form>
        </main>
    )
}
