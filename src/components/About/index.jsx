import { forwardRef } from 'react';
import './style.scss'

export const About = forwardRef(function About(props, ref) {
    return (
        <div ref={ref} className="about">
            <div className="photo">

            </div>
            <div className="infos">
                <p className="title">
                    Sobre mim
                </p>
                <p className="city">
                    Brasilia
                </p>
                <p className="resume">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id egestas dui. Nullam finibus aliquam enim quis faucibus. Aenean ac commodo dolor, nec bibendum velit.
                </p>
                <div className="networks">

                </div>
                <div className="buttons">
                    <div className="download">
                        <p>Currículo</p>
                    </div>
                    <div className="email">
                        <p>E-mail</p>
                    </div>
                </div>
            </div>
        </div>
    )
})