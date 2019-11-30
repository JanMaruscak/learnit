import React from "react";

export default function User() {
  return (
    <main>
      <h1>Váš účet</h1>
      <div className="form-container">
        <form className="login">
            <h2>Přihlášení</h2>
          <p>Email:</p>
          <input type="email" placeholder="example@gmail.com" />
          <p>Heslo:</p>
          <input type="password" placeholder="*********" />
          <button type="submit" className="login-button">Přihlásit se</button>
        </form>
        <form className="register">
            <h2>Registrace</h2>
          <p>Email:</p>
          <input type="email" placeholder="example@gmail.com" />
          <p>Heslo:</p>
          <input type="password" placeholder="*********" />
          <button type="submit" className="login-button">Registrovat</button>
        </form>
      </div>
    </main>
  );
}
