import { forwardRef } from 'react';
import './style.scss'
import Profile from '../../assets/profile.png';

export const About = forwardRef(function About(props, ref) {
    return (
        <div ref={ref} className="about">
            <div className="photo">
                <img src={Profile} alt="" />
            </div>
            <div className="infos">
                <p className="title">
                    Sobre mim
                </p>
                <p className="city">
                    Brasilia
                </p>
                <p className="resume">
                    Desenvolvedor Front-end com Vue, React e React Native. 
                    <br />
                    <br />
                    Em busca de projetos que atinjam pessoas pelo mundo.
                </p>
                <div className="networks">

                </div>
                <div className="buttons">
                    <a className="download" target="_blank" href='/Profile.pdf'>
                        <p>Currículo</p>
                    </a>
                    <a className="email" href='mailto:qaznickael@protonmail.com'>
                        <p>E-mail</p>
                    </a>
                </div>
            </div>
        </div>
    )
})