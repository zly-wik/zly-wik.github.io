import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { ScrollContainer, ScrollPage, Animator, Fade, batch, MoveIn } from 'react-scroll-motion';

function App() {
  return (
    <ScrollContainer snap='mandatory' className='scroll-container'>

      <ScrollPage className='scroll-page'>
        <Animator animation={batch(Fade(), MoveIn(0, 100) )} className='scroll-animator'>
          <Home />
        </Animator>
      </ScrollPage>

      <ScrollPage className='scroll-page'>
        <Animator animation={batch(Fade(), MoveIn(0, 100) )} className='scroll-animator'>
          <About />
        </Animator>
      </ScrollPage>

      <ScrollPage className='scroll-page'>
        <Animator animation={batch(Fade(), MoveIn(0, 100))} className='scroll-animator'>
          <Projects />
        </Animator>
      </ScrollPage>

      <ScrollPage className='scroll-page'>
        <Animator animation={batch(Fade(), MoveIn(0, 100))} className='scroll-animator'>
          <Skills />
        </Animator>
      </ScrollPage>

      <ScrollPage className='scroll-page'>
        <Animator animation={batch(Fade(), MoveIn(0, 100))} className='scroll-animator'>
          <Contact />
        </Animator>
      </ScrollPage>

    </ScrollContainer>
  );
}

export default App;
