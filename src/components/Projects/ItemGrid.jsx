import React from 'react';
import * as Style  from './ItemGrid.css';
import projects from '../../utils/projectsDatas';

const ItemGrid = () => {
    
  return (
    <Style.ItemGrid>
      <Style.ContainerCard>
        {
          projects.map((project, index) => {
            return (<Style.Card key={index}>
              <a href={project.iconSocial[0].link} target="_blank">
                <img src={project.image} alt={project.title} />
              </a>
                <h2>{project.title}</h2>

              <Style.ContatinerTecIcons>
                <span className='subTitle'>Tecnologias usadas:</span>
                
                <div>
                  {project.iconTecno.map((icon, index) => <span key={index}>{icon}</span>)}
                </div>
              </Style.ContatinerTecIcons>

              <Style.Paragraph>{project.description}</Style.Paragraph>

              <Style.ContainerSocial>
                {
                  project.iconSocial.map((social, index) => (
                    <a key={index} href={social.link} target='_blank'>
                      {social.svgIcon}
                      <span>{social.title}</span>
                    </a>
                  ))
                }
              </Style.ContainerSocial>
            </Style.Card>
            )
          })
        }
      </Style.ContainerCard>
    </Style.ItemGrid>
  )
}

export default ItemGrid
