import React, { useState } from 'react'
import Router from 'next/router'
import Layout from '../components/Layout'

var crypto = require('crypto');



const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitData = async e => {
    e.preventDefault()
    try {
      password = crypto.createHash('md5').update(password).digest('hex')
      const body = { name, email, password }
      await fetch(`/api/user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      await Router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Layout>
      <div className="page">
        <form
          onSubmit={submitData}>
          <h1>S'enregistrer</h1>
          <input
            autoFocus
            onChange={e => setName(e.target.value)}
            placeholder="Nom"
            type="text"
            value={name}
          />
          <input
            onChange={e => setEmail(e.target.value)}
            placeholder="Email address"
            type="text"
            value={email}
          />
          <input
            onChange={e => setPassword(e.target.value)}
            placeholder="Mot de passe"
            type="password"
            value={password}
          />
          <input
            disabled={!name || !email || !password}
            type="submit"
            value="S'enregistrer"
          />
          <a className="back" href="/" onClick={() => Router.push('/')}>
            or Cancel
        </a>
        </form>
      </div>
      <style jsx>{`
      .page {
        background: white;
        padding: 3rem;
        display: flex;
        justify-content: center;
      }

      input {
        width: 100%;
        padding: 0.5rem;
        margin: 0.5rem 0;
        border-radius: 0.25rem;
        border: 0.125rem solid rgba(0, 0, 0, 0.2);
      }

      input[type='submit'] {
        background: #ececec;
        border: 0;
        padding: 1rem 2rem;
      }

      .back {
        margin-left: 1rem;
      }
    `}</style>
    </Layout>
  )
}

export default SignUp
