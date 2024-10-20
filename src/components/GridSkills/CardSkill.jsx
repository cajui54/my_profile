import * as styled from "./styles.css";

const CardSkill = ({ skills }) => {
  return (
    <styled.CardSkill>
      <dt>
        <styled.SkillTitle color_svg={skills.color}>
          {skills.svg}
          <div>
            <h2>{skills.title}</h2>
            <h3>{skills.describe}</h3>
          </div>
        </styled.SkillTitle>
      </dt>
      {skills.subSkills.length > 0 &&
        skills.subSkills.map((subSkill, index) => (
          <dd key={index}>
            <styled.SkillTitle color_svg={subSkill.subColor}>
              {subSkill.svg}
              <div>
                <h2>{subSkill.title}</h2>
                <h3>{subSkill.subTitle}</h3>
              </div>
            </styled.SkillTitle>
          </dd>
        ))}
    </styled.CardSkill>
  );
};

export default CardSkill;
