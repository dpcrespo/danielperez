import { useState, useEffect } from 'react';

function App() {
  const [toggleOpenMenu, setToogleOpenMenu] = useState(false);

  useEffect(() => {
    if (toggleOpenMenu) {
      document.querySelector('body').classList.add('noscroll');
    } else {
      document.querySelector('body').classList.remove('noscroll');
    }
  }, [toggleOpenMenu]);


  const handleClick = (event) => {
    event.preventDefault();
    setToogleOpenMenu(!toggleOpenMenu);
  }

  return (
    <>
      <header
        className={`
          header
          ${toggleOpenMenu ? 'open' : ''}
        `}
      >
        <div className={`overlay has-fade ${toggleOpenMenu ? 'fade-in' : 'fade-out'}`}></div>
        <nav className="container flex flex-jc-sb flex-ai-c">
          <a href="/" className="header__logo">
            DPC
          </a>

          <div
            role="button"
            className={`
            header__toggle
            hide-for-desktop
          `}
            onClick={handleClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="header__links hide-for-mobile">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#blog">Blog</a>
          </div>
        </nav>
        <div className={`header__menu has-fade ${toggleOpenMenu ? 'fade-in' : 'fade-out'}`}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#blog">Blog</a>
        </div>
      </header>
      <section className="about">
        <img src="src/avatar_200.png" alt="avatar" />
        <h1>Daniel<br /> Perez</h1>
        <hr width="10%" />
        <h2>Front-End Developer</h2>


      </section>
    </>
  );
}

export default App;
