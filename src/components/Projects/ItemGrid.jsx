import {useEffect} from 'react';
import * as Style  from './ItemGrid.css';
import projects from '../../utils/projectsDatas';
import ScrollReveal from 'scrollreveal';

const ItemGrid = () => {
  const scrollReveal = ScrollReveal({reset: true});

  useEffect(() => {
    projects.forEach((_, index) => {
      const time = parseInt(`${index + 1}000`);
      scrollReveal.reveal(`.skillCard${index}`, {scale: 1.6, duration: time});
    })
  }, [])
    
  return (
    <Style.ItemGrid>
      <Style.ContainerCard>
        {
          projects.map((project, index) => {
            return (<div key={index} className={`skillCard${index}`}><Style.Card >
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
            </Style.Card></div>
            )
          })
        }
      </Style.ContainerCard>
    </Style.ItemGrid>
  )
}

export default ItemGrid
