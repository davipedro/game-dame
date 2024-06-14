import Navbar from "../components/navbar/Navbar"

import { useState, useEffect } from "react"

import './UserPanel.css'

import trashIcon from '../assets/trash-can-icon.png'
import pencilIcon from '../assets/pencil-icon.png'

import spongeBob from '../assets/spongebob-image.png'
import deliverUsMars from '../assets/deliver-us-mars-image.png'
import godOfWar from '../assets/gow-image.png'
import deathStranding from '../assets/death-stranding-image.png'
import GameGallery from "../components/GameGallery/GameGallery"

const UserPanel = () => {
  
  const gamesPerPageMobile = 1;
  const gamesPerPageDesktop = 4;

  const [username, setUsername] = useState("Nome do Usuário")
  const [email, setEmail] = useState("nomeusuario@email.com")
  const [cpf, setCpf] = useState("123.456.789-00")
  
  const games = [
    { image: spongeBob, rating: '100/100' },
    { image: deliverUsMars, rating: '95/100' },
    { image: godOfWar, rating: '75/100' },
    { image: deathStranding, rating: 'Adicionar avaliação' },
    { image: spongeBob, rating: '88/100' },
    { image: deliverUsMars, rating: '92/100' },
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 590);

  const updateScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 590);
  };

  useEffect(() => {
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div id="box-shadow"></div>
      <main className="user-panel-main-container">
        <section className="user-data">
          <h1>Olá, {username}</h1>
          <p id="display-email">Seu email é {email}</p>
          <p id="display-cpf">Seu CPF é {cpf}</p>

          <div 
            className="user-panel-btn" 
            onClick={() => {window.location.href = '/alterar-dados'}}
          >
            <a href="/alterar-dados">Alterar Dados</a>
            <img src={pencilIcon} alt="pencil-icon" />
          </div>
          <div 
            className="user-panel-btn"
            onClick={() => {window.location.href = '/excluir-conta'}}
          >
            <a href="/excluir-conta">Excluir Conta</a>
            <img src={trashIcon} alt="trash-can-icon" />
          </div>
          <div 
            className="user-panel-btn" 
            id="admin-panel-link"
            onClick={() => {window.location.href = '/admin-panel'}}
          >
            <a href="/painel-admin">Tela do admin</a>
          </div>
        </section>
        <section className="user-games">

          {!isSmallScreen ? (
            <GameGallery games={games} gamesPerPage={gamesPerPageDesktop} />
          ) : (
            <GameGallery games={games} gamesPerPage={gamesPerPageMobile} />
          )}
          
        </section>
        <a href="/cart" id="cart"></a>
      </main>
    </>
  )
}

export default UserPanel