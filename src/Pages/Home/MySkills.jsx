import data from "../../data/index.json";

const MySkills = () => {
    return(
        <section className="skills--section" id="mySkills">
            <div className="portfolio--container">
                <h2 className="skills--section--heading">My Skills</h2>
            </div>

            <div className="skills--section--container">
            {data?.skills?.map((item, index) => (
                <div key={index} className="skills--section--card">
                    
                    <img style={{width: '100%', height: '100%', borderRadius: 10}} src={item.src} alt="skills"/>

                    <div className="skills--section--card--content">
                        <h3 className="skills--section--title">{item.title}</h3>
                        <p className="skills--section--description">{item.description}</p>
                    </div>
                </div>
            ))}
            </div>
        </section>
    )
}

export default MySkills;