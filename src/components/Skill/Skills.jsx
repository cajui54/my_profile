import React, { useEffect } from 'react';
import skills from '../../utils/skillDatas';
import * as Style from './Skill.css';
import * as Main from '../../Main.css';
import ScrollReveal from 'scrollreveal';

const Skills = () => {
    const scrollReveal = ScrollReveal({reset: true});
    useEffect(() => {
        
        skills.forEach((_, index) => {
            const time = parseInt(`${index + 1}000`);
            scrollReveal.reveal(`.stack${index}`, {scale: 1.5, duration: time});
        })
    }, []);

  return (
    <Style.Skill id='skills'>

        <Main.Titles>
            <h2>My Skills</h2>
            <h3>Minhas principais habilidades</h3>
        </Main.Titles>

        <Style.Stacks>
            {
                skills && (
                    skills.map((skill, index) => (
                        <div className={`card-stack stack${index}`} key={skill.title}>
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
