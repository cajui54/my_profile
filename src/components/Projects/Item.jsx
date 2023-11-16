import { useState } from 'react'
import * as Style from './Item.css';
import projects from '../../utils/projectsDatas';
import { LuChevronLeftCircle } from "react-icons/lu";
import { FiArrowRightCircle } from "react-icons/fi";


const Item = () => {
    let [index, setIndex] = useState(0);
  
    const handleClickMove = (moveTo) => {
      switch(moveTo) {
        case "left":
          if(index > 0) setIndex(index-=1);
          break;
        case "right":
          if(index < (projects.length -1 )) setIndex(index+=1);
          
          break;
      }
    }

  return (
    <Style.Item>
        <div className='btnLeft'>
          {index > 0 && <LuChevronLeftCircle onClick={() =>handleClickMove('left')}/> }
        </div>

        <div className='btnRight'>
          {index < (projects.length -1 ) &&<FiArrowRightCircle  onClick={() => handleClickMove('right')}/>}
        </div>

        <Style.LinkImage>
            <a href={projects[index].iconSocial[0].link} target="_blank">
              <div className='bgGradient'></div>
              <img src={projects[index].image} alt={projects[index].title}/>
            </a>
        </Style.LinkImage>
        <h2>{projects[index].title}</h2>

      <Style.StackContainer>
        {
            projects[index].iconTecno.map((icon, index) => <span key={index}>{icon}</span>)
        }
      </Style.StackContainer>

      <Style.Description>
        {projects[index].description}
      </Style.Description>

      <Style.LinksInfo>
        {
            projects[index].iconSocial.map((item, index) =>(
                <a key={index} href={item.link} target="_blank">
                    {item.svgIcon}
                    <span>{item.title}</span>
                </a>
            ))
        }
      </Style.LinksInfo>
    </Style.Item>
  )
}

export default Item
