import React from 'react';
import * as Style from './Hero.css';
import imgProfile from '../../assets/images/profile.png';
import filePDF from '../../assets/pdf/curriculo.pdf'
import { FaGithub,  FaLinkedin, FaFileDownload, FaWhatsapp   } from "react-icons/fa";



const Hero = () => {
  return (
    <Style.Hero id='aboutMe'>
      <Style.ProfileContainer>
        <img src={imgProfile} alt="profile image" />
      </Style.ProfileContainer>
    
        <Style.InfoBio>
            <Style.TitlesBio>
                <h2>Olá, Eu sou <span>Jackson Silva</span></h2>
            </Style.TitlesBio>

                <p>
                    Estou cursando Ciência da Computação e estudando desenvolvimento web com foco no full-stack, e um dos meus princípais objetivos é dominar as princípais tecnologias relacionado a esse ecossistema.
                </p>

            <Style.SVGIconsContainer>
                <a href='https://wa.me/5511941515753' target='blank'>
                    <FaWhatsapp/>
                    <span>What</span>
                </a>

                <a href='https://github.com/cajui54' target='blank'>
                    <FaGithub/>
                    <span>GitHub</span>
                </a>

                <a href='https://www.linkedin.com/in/jacksoncajui/' target='blank'>
                    <FaLinkedin/>
                    <span>Linkedin</span>
                </a>

                <a href={filePDF} download>
                    <FaFileDownload/>
                    <span>Currículo</span>
                </a>
            </Style.SVGIconsContainer>
        </Style.InfoBio>

    </Style.Hero>
  )
}

export default Hero
