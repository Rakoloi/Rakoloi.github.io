const AboutMe = () => {
    return(
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img style={{borderRadius: 20}} src="./img/mosa_13.jpg" alt="mosa_image" />
            </div>

            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                <p className="section--title">About Me</p>
                <h1 className="skills-section--heading">Mosa</h1>
                <p className="hero--section-description">
                I am enthusiastic and dedicated software developer with a robust foundation in software design. I possess a keen interest in staying abreast of industry trends and leveraging the latest technologies and development tools and procedures. My skill set is diverse, and I am proficient in various programming languages. I demonstrate effective self-management during independent projects and contribute positively as a team member. I am eager to apply the theoretical knowledge gained during my academic studies to address real-world problems in a professional IT environment.
                </p>
                
                </div>
            </div>
        </section>
    )
}

export default AboutMe;