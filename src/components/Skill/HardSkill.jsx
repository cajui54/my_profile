import React from 'react';
import Skill from './Skill.css';
import skills from '../../utils/skillDatas';
import { TbBrandRedux } from 'react-icons/tb'
import { BiLogoTypescript } from 'react-icons/bi'

const HardSkill = () => {

  return (
    <Skill className='sectionMain' id='mySkills'>

      <div className="container-titles">
        <h2>My Skills</h2>
        <h3>Minhas Expertise</h3>
      </div>

      <div className="container-skills">
        {
            skills && (
                skills.map((skill, index) => (
                    <div key={index}>
                        <i className={skill.icon}></i>
                        <p>{skill.title}</p>
                    </div>
                ))
            )
        }

        <div>
            <TbBrandRedux/>
            <p>Redux</p>
        </div>

        <div>
            <BiLogoTypescript/>
            <p>TypeScript</p>
        </div>
      </div>
      
    </Skill>
  )
}

export default HardSkill
