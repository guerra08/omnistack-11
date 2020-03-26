import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'
import './styles.css'

import logoImage from '../../assets/logo.svg'

export default function Register(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')

    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()
        
        const data = {
            "name": name,
            "email": email,
            "whatsapp": whatsapp,
            "city": city,
            "uf": uf
        }

        try{
            const response = await api.post('ongs', data)
            alert(`Seu ID de acesso é: ${response.data.id}`)
            history.push('/')
        }catch(e){
            alert('Erro no cadastro, tente novamente!')
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be The Hero!"/>

                    <h1>Cadastro</h1>
                    <p>Faça o seu cadastro na plataforma e ajude diversas pessoas a encontrarem casos e ONGs.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="E02041"></FiArrowLeft>
                        Voltar
                    </Link>
                </section>

                <form onSubmit={handleSubmit}>
                    <input placeholder="Nome da ONG" onChange={e => setName(e.target.value)} value={name}/>   
                    <input type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} value={email}/>
                    <input type="text" placeholder="Whatsapp" onChange={e => setWhatsapp (e.target.value)} value={whatsapp}/>

                    <div className="input-group">
                        <input placeholder="Cidade" onChange={e => setCity (e.target.value)} value={city}/>
                        <input placeholder="UF" style={{width: 80}} onChange={e => setUf (e.target.value)} value={uf}/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    )
}