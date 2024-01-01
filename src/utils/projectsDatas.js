import imgMovies from '../assets/images/movies_star.jpg';
import imgSocial from '../assets/images/social.jpg';
import imgDolar_Real from '../assets/images/real_dolar.jpg';
import imgStoque from '../assets/images/stock.jpg';
import imgFII from '../assets/images/fiis.jpeg';
import imgUser from '../assets/images/user.jpg';
import imgBarbershop from '../assets/images/babershop.png';
import  {BiLogoReact, BiLogoMongodb} from 'react-icons/bi';
import  { AiFillHtml5 } from 'react-icons/ai';
import  { PiFileCssBold } from 'react-icons/pi';
import  { TbBrandJavascript, TbBrandRedux } from 'react-icons/tb';
import  {FaNode, FaGlobe, FaGithub} from 'react-icons/fa';
import { BsFiletypeJson } from "react-icons/bs";
import { SiStyledcomponents } from "react-icons/si";
import { SiAxios} from "react-icons/si";

const projects = [
    {   
        image: imgBarbershop,
        title: 'Barbershop',
        iconTecno: [<BiLogoReact/>, <TbBrandRedux/>, <SiStyledcomponents/>, <SiAxios/>],
        description: 'Gerenciador de uma barbearia',
        iconSocial: [
            {link: 'https://movie-star-neon.vercel.app/', svgIcon: <FaGlobe/>, title: 'WebSite'},
            {link: 'https://github.com/cajui54/Movie_Star', svgIcon: <FaGithub/>, title: 'Repositório'} 
        ]
    },
    {   
        image: imgMovies,
        title: 'Movie Star',
        iconTecno: [<BiLogoReact/>, <PiFileCssBold/>, <TbBrandJavascript/>],
        description: 'Projeto que consiste em uma bibliotéca de uma API de filmes',
        iconSocial: [
            {link: 'https://front-end-barbershop.vercel.app/', svgIcon: <FaGlobe/>, title: 'WebSite'},
            {link: 'https://github.com/cajui54/front-end-barbershop', svgIcon: <FaGithub/>, title: 'Repositório'} 
        ]
    },
    {   
        image: imgSocial,
        title: 'Rede Social',
        iconTecno: [<BiLogoReact/>, <FaNode/>, <BiLogoMongodb/>],
        description: 'React Gran desenvolvido no curso React.JS, utilizando arquitetura MVC e Banco de Dado',
        iconSocial: [
            
            {link: 'https://github.com/cajui54/Rede_Social', svgIcon: <FaGithub/>}
        ]
    },
    {   
        image: imgStoque,
        title: 'Dashboard Stock',
        iconTecno: [<BiLogoReact/>, <BsFiletypeJson/>, <SiStyledcomponents/>],
        description: 'Gerenciador de Estoque, que simula o gerencionamento de um estoque de bebidas',
        iconSocial: [
            {link: 'https://dashboard-reactjs-lac.vercel.app/', svgIcon: <FaGlobe/>, title: 'WebSite'},
            {link: 'https://github.com/cajui54/dashboard-reactjs', svgIcon: <FaGithub/>, title: 'Repositório'} 
        ]
    },
    {   
        image: imgDolar_Real,
        title: 'Conversor de Moedas',
        iconTecno: [<AiFillHtml5/>, <PiFileCssBold/>, <TbBrandJavascript/>],
        description: 'Utiliza uma API que atualizar a cada 30 segundos.',
        iconSocial: [
            {link: 'https://cajui54.github.io/conversor-moeda-dolar-real/', svgIcon: <FaGlobe/>, title: 'WebSite'},
            {link: 'https://github.com/cajui54/conversor-moeda-dolar-real', svgIcon: <FaGithub/>, title: 'Repositório'} 
        ]
    },
    {   
        image: imgFII,
        title: 'Simulador Dividendos',
        iconTecno: [<AiFillHtml5/>, <PiFileCssBold/>, <TbBrandJavascript/>],
        description: 'Simulador para calcular dividendos FIIs',
        iconSocial: [
            {link: 'https://simulador-dividendo-fundo-imobiliario-zeta.vercel.app/', svgIcon: <FaGlobe/>, title: 'WebSite'},
            {link: 'https://github.com/cajui54/SimuladorDividendoFundoImobiliario', svgIcon: <FaGithub/>, title: 'Repositório'} 
        ]
    },
    {   
        image: imgUser,
        title: 'Dashboard User',
        iconTecno: [<AiFillHtml5/>, <PiFileCssBold/>, <TbBrandJavascript/>],
        description: 'Gerenciador de usuários , que simula o gerencionamento de usuários',
        iconSocial: [
            {link: 'https://sistema-gerenciador-usuarios.vercel.app/#', svgIcon: <FaGlobe/>, title: 'WebSite'},
            {link: 'https://github.com/cajui54/Sistema-Gerenciador-Usuarios', svgIcon: <FaGithub/>, title: 'Repositório'} 
        ]
    },
];

export default projects;