import { useEffect, useState, useRef, forwardRef } from 'react';
import './style.scss';

export const Experience = forwardRef(function Experience(props, ref) {
    const [actualBanner, setActualBanner] = useState(0);

    const bannerRef = useRef();

    useEffect(() => {
        const content = bannerRef.current;
        const { clientHeight } = content;

        const top = clientHeight * actualBanner;
        
        content.scroll({
            top,
            behavior: 'smooth',
        })
    },[actualBanner]);

    function setNewBanner(bannerIndex) {
        setActualBanner(bannerIndex);
    }

    return (
        <div ref={ref} className='experience'>
            <div className="menu">
                <h1>experiência</h1>
                <div className="options">
                    <div className={actualBanner == 0 ? 'option active' : 'option'} onClick={() => setNewBanner(0)}>
                        Estágio
                    </div>
                    <div className={actualBanner == 1 ? 'option active' : 'option'} onClick={() => setNewBanner(1)}>
                        Júnior
                    </div>
                    <div className={actualBanner == 2 ? 'option active' : 'option'} onClick={() => setNewBanner(2)}>
                        Pleno BR
                    </div>
                    <div className={actualBanner == 3 ? 'option active' : 'option'} onClick={() => setNewBanner(3)}>
                        Pleno EUA
                    </div>
                </div>
            </div>
            <div className="container-scroll" ref={bannerRef}>
                <div className="details">
                    <div className="title">
                        Experiencia de estágio <span>Ago 2019 - Jan 2020</span>
                    </div>
                    <p className="company">
                        XXX
                    </p>
                    <p className="resume">
                        Aplicativos em React Native
                    </p>
                </div>
                <div className="details">
                    <div className="title">
                        Experiencia de Júnior <span>Jan 2020 - Abr 2020</span>
                    </div>
                    <p className="company">
                        XXX
                    </p>
                    <p className="resume">
                        Front-end com React, Back-end com Node e PostgreSQL
                    </p>
                </div>
                <div className="details">
                    <div className="title">
                        Experiencia de Pleno em empresa brasileira <span>Jan 2021 - Set 2021</span>
                    </div>
                    <p className="company">
                        XXX
                    </p>
                    <p className="resume">
                        Front-end com React, Back-end com Node.
                    </p>
                </div>
                <div className="details">
                    <div className="title">
                        Experiencia de Pleno em empresa americana <span>Set 2021 - Atual</span>
                    </div>
                    <p className="company">
                        XXX
                    </p>
                    <p className="resume">
                        Front-end com Vue, React e React Native
                    </p>
                </div>
            </div>
        </div>
    )
})