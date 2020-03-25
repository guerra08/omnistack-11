import React from 'react'
import {FiLogIn} from 'react-icons/fi'
import {Link} from 'react-router-dom'

import './styles.css'

import heroesImage from '../../assets/heroes.png'
import logoImage from '../../assets/logo.svg'

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="Be The Hero!"/>

                <form action="">

                    <h1>Faça seu logon</h1>
                    <input type="text" placeholder="Sua id"></input>
                    <button className="button" type="submit">Enviar</button>

                    <Link to="/register">
                        <FiLogIn size={16} color="E02041"></FiLogIn>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>


            <img src={heroesImage} alt="Heroes"></img>
        </div>
    )
}