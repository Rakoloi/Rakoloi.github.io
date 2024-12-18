import { Link } from "react-scroll";

const HeroSection = () => {
    return(
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, my name is Rakoloi Mosa</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">IT </span>{" "}
                        <br />
                        Graduate
                    </h1>
                    <p className="hero--section-description">
                        Am seeking for an entry level position.
                        <br /> Wanna get in touch?
                    </p>
                </div>
                <Link smooth={true} to="Contact" className="btn btn-primary">Get In Touch</Link>
            </div>

            <div className="hero--section--img" >
                <img style={{borderBottomLeftRadius: 200, borderBottomRightRadius: 10, borderTopRightRadius: 10, borderTopLeftRadius: 10}} src="./img/mosa_12.jpg" alt="Hero Section" />
            </div>
        </section>
    )
}

export default HeroSection;