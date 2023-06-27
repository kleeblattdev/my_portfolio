import profileImg from '../images/profile_img.jpg';

import './about.scss';

const About = () =>{
    return(
    <main className="about">
        <section>
            <img src={profileImg} alt="profilbild" />
        </section>
        <section>
            <article>
                <h4>Über mich</h4>
                <p>Hallo, mein Name ist Karin, ich bin 31 Jahre alt und komme aus Münster (Westf.).</p>
            </article>
        </section>
    </main>)
    };
    export default About;
    