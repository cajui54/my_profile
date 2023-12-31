import React, { useEffect, useState } from 'react';
import * as Style from './Project.css';
import * as Main from '../../Main.css';
import Item from './Item';
import ItemGrid from './ItemGrid';

const Projects = () => {
  const [windowsSizeWidth, setWindowsSizeWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWindowsSizeWidth(window.innerWidth);
  },[window.innerWidth]);

  return (
    <Style.Project id='projects'>

      <Main.Titles>
        <h2>My Projects</h2>
        <h3>Meus projetos recentes</h3>
      </Main.Titles>

      <Item/>
      <ItemGrid/>
    </Style.Project>
  )
}

export default Projects
