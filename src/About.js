import avatar from './avatar_200.png'

export const About = () =>
    <section
        className="section"
        id="about"
    >
        <h1 className="section-title">About me</h1>
        <div className="about-content">
            <div>
                <img
                    alt="daniel perez"
                    className="avatar"
                    src={avatar}
                />
                <p className="my-name">Daniel<br />Pérez</p>
                <p><strong>FrontEnd Developer</strong></p>
            </div>
            <article>
                <p>
                    I am a person who is passionate about learning new technologies and applying them in every project that I have participated in. One of my motivations is to create things from scratch to achieving a product or services that is successful for the people. My experience and my knowledge was gained throughout 8 years. Firstly, I was working 3 years as system administrator, then I started working in as healthcare consultant during 1 year, after that I had the opportunity to progress to a healthcare project manager where I have been involved almost three years. Lately I have giving my time between web project manager and web software developer.
                </p>
            </article>
        </div>
    </section>