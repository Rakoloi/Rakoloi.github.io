import HeroSection from "../HeroSection";
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import Navbar from "../Navbar";
import MySkills from "../MySkills";


const Home = () => {
    return(
        <>
            <Navbar />
            <HeroSection />
            <AboutMe />
            <MySkills />
            <ContactMe />
            <Footer />
        </>
    )
}

export default Home;