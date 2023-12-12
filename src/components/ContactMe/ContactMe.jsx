import React from 'react';
import { FaLinkedin, FaWhatsapp   } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoIosWarning } from "react-icons/io";
import * as Style from './ContactMe.css';
import * as Main from '../../Main.css';

const ContactMe = () => {
  return (
    <Style.ContactMe id='contactMe'>
        <Main.Titles>
            <h2>My Contacts</h2>
            <h3>Meus principais Contatos</h3>
        </Main.Titles>

        <Style.ListContact>
            <li>
                <p><IoIosWarning /> Aviso:</p>
                <p>Apenas para trabalho dentro do escopo!</p>
            </li>

            <li>
                <a href='https://www.linkedin.com/in/jacksoncajui/' target='_blank'>
                    <FaLinkedin/>
                    <span>Linkedin</span>
                </a>
            </li>

            <li>
                <a href='https://wa.me/5511941515753' target='_blank'>
                    <FaWhatsapp/>
                    <span>Meu what's app</span>
                </a>
            </li>

            <li>
                <MdOutlineMarkEmailRead />
                <span>cajui54@gmail.com</span>
            </li>

            <li>
                <CiLocationOn />
                <address>
                    <span> Mauá - SP / Brasil </span>
                </address>
            </li>
        </Style.ListContact>
      
    </Style.ContactMe>
  )
}

export default ContactMe
