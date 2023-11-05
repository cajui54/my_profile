import React, { useState } from 'react';
import projects from '../../utils/projectsDatas';
import Projects from './Project.css';
import  {FaCircleArrowLeft, FaCircleArrowRight} from 'react-icons/fa6';

const ProjectSection = () => {

  const [indexSlide, setIndex] = useState(0);

  const handleClickLeft = () => {
    if(indexSlide >= 0) {
      setIndex(indexSlide - 1);
    }
  }

  const handleClickRight = () => {

    if (indexSlide < (projects.length - 1)) {
      setIndex(indexSlide + 1);
    }
  }

  return (
    <Projects className='sectionMain'>
      
      <div className="container-titles" id='projects'>
        <h2>Meus Projetos</h2>
        <h3>Projetos Recentes</h3>
      </div>


      <div className='container-slide'>

          { indexSlide !== (projects.length - 1) && <FaCircleArrowRight className='icon-btns btn-right'onClick={handleClickRight}/>}
          { indexSlide !== 0 && <FaCircleArrowLeft className='icon-btns' onClick={handleClickLeft}/> }

          <div className="slide-Project">
            
            <div className='container-img'>
              <img src={projects[indexSlide].image} alt="" />
              <div></div>
            </div>

            <h2>{projects[indexSlide].title}</h2>

            <fieldset className='card-skills'>

              <legend>Tecnologias usadas: </legend>
              {projects[indexSlide].iconTecno.map((icon, index) => <div key={index}>{icon}</div>)}

            </fieldset>

            <p>{projects[indexSlide].description}</p>

            <div className='container-details'>
              {
                projects[indexSlide].iconSocial.map((social, index) => (
                  <div key={index}>
                    <a href={social.link} target="_blank">
                      {social.svgIcon}
                      <span>{social.title}</span>
                    </a>
                  </div>            
                ))
              }
            </div>

        </div>

      </div>

      
    </Projects>
  )
}

export default ProjectSection
