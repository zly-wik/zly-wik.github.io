import './App.css';
import Home from './components/Home';
import { ScrollContainer, ScrollPage, Animator, Fade, batch, Sticky, MoveOut, MoveIn } from 'react-scroll-motion';

function App() {
  return (
    <ScrollContainer snap='mandatory' className='scroll-container'>
      <ScrollPage className='scroll-page'>
        <Animator animation={batch(Fade(), MoveIn(0, 100), Sticky() )} className='scroll-animator'>
          <Home />
        </Animator>
      </ScrollPage>

      <ScrollPage className='scroll-page'>
        <Animator animation={batch(Fade(), MoveIn(0, 100), Sticky())} className='scroll-animator'>
          <Home />
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
