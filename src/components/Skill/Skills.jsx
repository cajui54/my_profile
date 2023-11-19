import React from 'react';
import skills from '../../utils/skillDatas';
import * as Style from './Skill.css';
import * as Main from '../../Main.css'

const Skills = () => {
  return (
    <Style.Skill id='skills'>

        <Main.Titles>
            <h2>My Skills</h2>
            <h3>Minhas principais habilidades</h3>
        </Main.Titles>

        <Style.Stacks>
            {
                skills && (
                    skills.map(skill => (
                        <div className='card-stack' key={skill.title}>
                            {skill.svg}
                            <div className="info">
                                <h3>{skill.title}</h3>
                                <p>{skill.subTitle}</p>
                            </div>
                        </div>

                    ))
                )
            }
         
        </Style.Stacks>

    </Style.Skill>
  )
}

export default Skills
