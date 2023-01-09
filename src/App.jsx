import { useRef } from 'react';
import './App.scss';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';

export const App = () => {
  const introductionRef = useRef();
  const aboutRef = useRef();
  const experiencerRef = useRef();
  return (
    <div className='container'>
      <Header refs={[introductionRef, aboutRef, experiencerRef]} />
      <Introduction ref={introductionRef} />
      <About ref={aboutRef} />
      <Experience ref={experiencerRef} />
    </div>
  )
};
