import './App.scss';
import { About } from './About';

function App() {
  return (
    <>
      <header className="sticky">
        <span>DPC</span>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <About />
        <section
          className="section"
          id="skills"
        >
          <h1 className="section-title">Skills</h1>
        </section>
      </div>
    </>
  );
}

export default App;
