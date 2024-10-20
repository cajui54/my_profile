import React, { useEffect } from "react";
import * as styled from "./styles.css";
import CardSkill from "./CardSkill";
import { datasSkill } from "../../utils/skillDatas";
import ScrollReveal from "scrollreveal";
const GridSkill = () => {
  const scrollReveal = ScrollReveal({ reset: true });
  useEffect(() => {
    datasSkill.forEach((_, index) => {
      const time = parseInt(`${index + 1}000`);
      scrollReveal.reveal(`.stack${index}`, { scale: 1.5, duration: time });
    });
  }, []);
  return (
    <styled.SkillContainer id="skills">
      <styled.TitlesContainer>
        <h2>My Hard Skills</h2>
        <h3>Minhas principais Habilidades e tecnologias</h3>
      </styled.TitlesContainer>

      <styled.CartContainer>
        {datasSkill &&
          datasSkill.map((skill, index) => (
            <div key={index}>
              <CardSkill skills={skill} />
            </div>
          ))}
      </styled.CartContainer>
    </styled.SkillContainer>
  );
};

export default GridSkill;
