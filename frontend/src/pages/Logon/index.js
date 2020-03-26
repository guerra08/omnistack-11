import React, {useState} from 'react'
import {FiLogIn} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom'
import api from '../../services/api'

import './styles.css'

import heroesImage from '../../assets/heroes.png'
import logoImage from '../../assets/logo.svg'

export default function Logon(){

    const [id, setId] = useState('')
    const h = useHistory()

    async function handleLogin(e){
        e.preventDefault()

        try {
            const res = await api.post('/sessions', { id })
            
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', res.data.name)

            h.push('/profile')
        } catch (error) {
            alert('Falha no logon, tente novamente!')
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="Be The Hero!"/>

                <form onSubmit={handleLogin}>

                    <h1>Faça seu logon</h1>
                    <input type="text" placeholder="Sua id" onChange={e => setId(e.target.value)}></input>
                    <button className="button" type="submit">Enviar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="E02041"></FiLogIn>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>


            <img src={heroesImage} alt="Heroes"></img>
        </div>
    )
}