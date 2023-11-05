import React from 'react';
import Contact from './Contact.css';
import {BsLinkedin} from 'react-icons/bs';
import {GiBrazilFlag} from 'react-icons/gi';
import {FaWhatsapp, FaMapMarkerAlt} from 'react-icons/fa';
import FormEmail from './FormEmail';

const ContactMe = () => {
  return (
    <Contact className='sectionMain'>

        <div id='contactMe' className="container-titles">
            <h2>Meus Contatos</h2>
            <h3>My Contact</h3>
      </div>

      <ul>
        
        <li>
          <a title='Linkedin' href="https://www.linkedin.com/in/jacksoncajui/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin/>
            <span>Linkedin</span>
          </a>
        </li>

        <li>
          <a title='Whatsapp' href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp/>
            <span>Whats App</span>
          </a>
        </li>

        <li>
          <FaMapMarkerAlt/>
          <span>SP</span> / <GiBrazilFlag/> <span>Brasil</span>
        </li>
      </ul>

      <FormEmail/>
      
    </Contact>
  )
}

export default ContactMe
