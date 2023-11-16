import React from 'react';
import * as Style  from './ItemGrid.css';
import projects from '../../utils/projectsDatas';

const ItemGrid = () => {
    
  return (
    <Style.ItemGrid>
      {
        projects && (
            projects.map((project, index) =>{
                <div className='Card' key={index}>
                    <a href={project.iconSocial.link}>
                        <img src={project.image} alt={project.title} />
                    </a>
                    
                    <h2>{project.title}</h2>
                    <div>
                        {
                            project.iconSocial.map((icon, index) => (
                                <span key={index}>{icon}</span>
                            ))
                        }
                    </div>
                    <p>{project.description}</p>
                </div>
            })
        )
      }
    </Style.ItemGrid>
  )
}

export default ItemGrid
