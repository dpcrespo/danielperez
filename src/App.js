import './App.scss';

function App() {
  return (
    <div className="container">
      <header className="header">
        <span className="logo">DPC</span>
        <div className="navbar">
          <a href="#about" className="link">About</a>
          <a href="#skills" className="link">Skills</a>
          <a href="#experience" className="link">Experience</a>
          <a href="#education" className="link">Education</a>
        </div>
      </header>
      <div className="main">
        <div id="about" className="section-shape">
          <h1>About</h1>
          <a href="#skills" className="next">Next</a>
        </div>
        <div id="skills" className="section-shape">
          <h1>Skills</h1>
          <a href="#experience">Next</a>
        </div>
        <div id="experience" className="section-shape">
          <h1>Experience</h1>
          <a href="#education">Next</a>
        </div>
        <div id="education" className="section-shape">
          <h1>Education</h1>
          <a href="#about">Next</a>
        </div>
      </div>
      
    </div>
  );
}

export default App;
