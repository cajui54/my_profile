import React, { useEffect } from "react";
import * as Style from "./Hero.css";
import imgProfile from "../../assets/images/profile.png";
import filePDF from "../../assets/pdf/19_03_24.pdf";
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaWhatsapp,
} from "react-icons/fa";
import ScrollReveal from "scrollreveal";

const Hero = () => {
  const scrollReveal = ScrollReveal({ reset: true });

  useEffect(() => {
    scrollReveal.reveal("#aboutMe", { scale: 1.5, duration: 2000 });
    scrollReveal.reveal(".revealWhats", { scale: 1.5, duration: 4000 });
    scrollReveal.reveal(".revealGitHub", { scale: 1.6, duration: 6000 });
    scrollReveal.reveal(".revealLinkedin", { scale: 1.7, duration: 8000 });
    scrollReveal.reveal(".revealCV", { scale: 1.8, duration: 10000 });
  }, []);

  return (
    <Style.Hero id="aboutMe">
      <Style.ProfileContainer>
        <img src={imgProfile} alt="profile image" />
      </Style.ProfileContainer>

      <Style.InfoBio>
        <Style.TitlesBio>
          <h2>
            Olá, Eu sou <span>Jackson Silva</span>
          </h2>
        </Style.TitlesBio>

        <p>
          Estou cursando Ciência da Computação e estudando desenvolvimento web
          com foco no full-stack, e um dos meus principais objetivos é dominar
          as principais tecnologias relacionado a esse ecossistema.
        </p>

        <Style.SVGIconsContainer>
          <a
            href="https://wa.me/5511941515753"
            target="blank"
            className="revealWhats"
          >
            <FaWhatsapp />
            <span>What</span>
          </a>

          <a
            href="https://github.com/cajui54"
            target="blank"
            className="revealGitHub"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/jacksoncajui/"
            target="blank"
            className="revealLinkedin"
          >
            <FaLinkedin />
            <span>Linkedin</span>
          </a>

          <a href={filePDF} download className="revealCV">
            <FaFileDownload />
            <span>Currículo</span>
          </a>
        </Style.SVGIconsContainer>
      </Style.InfoBio>
    </Style.Hero>
  );
};

export default Hero;
