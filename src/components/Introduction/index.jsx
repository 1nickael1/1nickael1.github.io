import { forwardRef } from 'react';
import './style.scss';

export const Introduction = forwardRef( function Introduction(props,ref)  {
    return (
        <div ref={ref} className='introduction-container'>
            <p className='default'>Olá, eu sou</p>
            <p className="name">Nickael</p>
            <p className='default'>Desenvolvedor Front-end.</p>
            <div className="buttons">
                <a target='_blank' href='https://www.linkedin.com/in/nickael-bruzzi/' className="linkedin">
                    <p>LinkedIn</p>
                </a>
                <a target='_blank' href='https://github.com/1nickael1' className="github">
                    <p>GitHub</p>
                </a>
            </div>
        </div>
    )
})