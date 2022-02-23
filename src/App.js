import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';
import scroll from './assets/scroll.png'

function App() {
	return (
		<div className='App'>
      <header>
        <h1 className='name'>Melissa Morgan</h1>
        <h3>Welcome to my portfolio. It's nice to meet you!</h3>
        <div className='scroll'>
          <img src={scroll} alt="scroll down" />
        </div>
      </header>
			<AboutMe />
      <Projects />
			<Contact />
			<Resume />
		</div>
	);
}

export default App;
