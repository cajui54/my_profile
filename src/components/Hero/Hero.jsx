import React from 'react';
import {FaSquareGithub} from 'react-icons/fa6';
import {FaWhatsapp} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs';
import {LiaFileDownloadSolid} from 'react-icons/lia';
import imgProfile from '../../assets/images/photo.jpeg';
import curriculoPDF from '../../assets/pdf/curriculo.pdf'
import Heros from './Heros.css';

const Hero = () => {
  return (
    <Heros>

      <div className="containe_img" id='aboutMe'>
            <img src={imgProfile} alt="foto perfil" />
      </div>

      <section className='container-hero-info'>

        <div className="container-title-hero">
          <h2>Olá, Eu Sou <span>Jackson Silva</span></h2>
          <h3>Developer Front-End</h3>
        </div>

        <p>
          Estou cursando Ciência da Computação e estudando desenvolvimento
          web com foco no front-end, e um dos meus princípais objetivos é 
          dominar as princípais tecnologias relacionado a esse ecossistema.
        </p>

        <div className="container-media-social">

          <a title='Github' href="https://github.com/cajui54" target="_blank" rel="noopener noreferrer">
            <FaSquareGithub/>
          </a>

          <a title='Meu Whats app' href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp/>
          </a>

          <a title='Linkedin' href="https://www.linkedin.com/in/jacksoncajui/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin/>
          </a>

          <a href={curriculoPDF} download title='Baixar Currículo'>
            <LiaFileDownloadSolid/>
            <span>Currículo</span>
          </a>
          </div>
      </section>
      

      
 
    </Heros>
  )
}

export default Hero
