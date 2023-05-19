import React from "react"
import './home.css'
import {GoMarkGithub} from 'react-icons/go'
import {AiFillHtml5, AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai'
import {ImCss3} from 'react-icons/im'
import {TbBrandCSharp} from 'react-icons/tb'
import { SiPhp, SiMysql, SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {CiMobile2} from 'react-icons/ci'
import Profile from '/src/components/Home/documents/FT_QUADRADA-200.jpg'
import ILOG from '/src/components/Home/documents/ILOG.png'
import {CarsBomb} from '/src/components/Home/documents/CarsBomb.png'
import Curriculo from '../Home/documents/Curriculo.pdf'
import {BsDownload} from 'react-icons/bs'


function Home(){
    const goToGithub = () =>{
        window.open("https://github.com/Arthur-F-Costa","_blank");
    }
    const goToLinkedin = () =>{
        window.open("https://www.linkedin.com/in/arthur-fernandes-da-costa-6b7814259/", "_blank");
    }
    const goToInstagram = () =>{
        window.open("https://www.instagram.com/imtutucosta/","_blank");
    }
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = Curriculo;
        link.download = 'Curriculo.pdf';
        link.click();
    }
    return(
        <div>
            <div className="card1">
                <img src="https://imgur.com/uaYbISA"/>
                <br />
                <button id="linkedin" onClick={goToGithub}><GoMarkGithub size="30px"></GoMarkGithub></button>
                <button id="linkedin" onClick={goToLinkedin}><AiFillLinkedin size="30px" /></button>
                <button id="linkedin" onClick={goToInstagram}><AiOutlineInstagram size="30px"/></button>
                <br />
                <p>Olá, Eu sou o Arthur, Estudante da Etec Ermelinda Giannini Teixeira, atualmente cursando o terceiro ano do ensino médio integrado ao curso de desenvolvimento de sistemas.</p>
                <p>Veja aqui algumas das competências desenvolvidas por mim ao longo dos anos...</p>
                <button onClick={handleDownload} className="download"><BsDownload/> Acesso ao meu currículo</button>
            </div>
            <div className="card2">
                <img src="https://imgur.com/lToZee3" id="img-carsbomb"/>
                <img src="https://imgur.com/nsHTXQf" id="img-ilog"/>
                <p id="ilog"> Ilog - I Love Old Games - Empresa fictícia</p>
                <p id="carsbomb">Car's Bomb - Projeto de locadora de carros</p>
            </div>
            <div className="card3">
                <div className="divisoes">
                    <div className="divisao1">
                        <div className="html" align>
                            <AiFillHtml5/>
                            <p>Html5</p>
                        </div>
                        <div className="css">
                            <ImCss3 ></ImCss3>
                            <p>CSS</p>
                        </div>
                        <div className="react">
                            <FaReact/>
                            <p>React</p>
                        </div>
                        <div className="php">
                            <SiPhp/>
                            <p>PHP</p>
                        </div>
                    </div>
                    <div className="divisao2">
                        <div className="js">
                            <SiJavascript/>
                            <p>JavaScript</p>
                        </div>
                        <div className="csharp">
                            <TbBrandCSharp />
                            <p>CSharp</p>
                        </div>
                        <div className="sql">
                            <SiMysql></SiMysql>
                            <p>MySql</p>
                        </div>
                        <div className="mobile">
                            <CiMobile2/>
                            <p>React Native</p>
                        </div>
                    </div>
                    <div className="divisao3">
                    </div>
                    <div className="divisao4">                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;
