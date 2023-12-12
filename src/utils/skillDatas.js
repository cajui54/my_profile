import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaNode  } from "react-icons/fa";
import { TbBrandRedux, TbBrandJavascript } from "react-icons/tb";
import { SiTypescript, SiAxios, SiStyledcomponents, SiJest } from "react-icons/si";


const skills = [
   {title: 'React.JS', subTitle: 'Library for web', svg: <FaReact/>},
   {title: 'Redux', subTitle: 'Gerenciador de estados globais', svg: <TbBrandRedux/>},
   {title: 'Axios', subTitle: 'Client HTTP', svg: <SiAxios/>},
   {title: 'Styled-Componets', subTitle: 'CSS baseado em JS', svg: <SiStyledcomponents/>},
   {title: 'Jest', subTitle: 'Framework de teste Unitários', svg: <SiJest/>},
   //{title: 'Node.JS', subTitle: 'Javascript runtime ', svg: <FaNode/>},
   {title: 'TypeScript', subTitle: 'Extends JavaScript by adding types', svg: <SiTypescript/>},
   {title: 'JavaScript', subTitle: 'Linguagem de programação ', svg: <TbBrandJavascript/>},
   {title: 'HTML5', subTitle: 'hyper text markup language', svg: <FaHtml5/>},
   {title: 'CSS3', subTitle: 'Cascading Style Sheets', svg: <FaCss3Alt/>},
   {title: 'Git', subTitle: 'Gerenciador de versionamento', svg: <FaGitAlt/>},
   {title: 'GitHub', subTitle: 'Repositório remoto', svg: <FaGithub />},
]

export default skills;