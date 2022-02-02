import Introduction from "../../components/introduction/intruduction"
import { navigate } from "@reach/router"
import "./welcome.scss"
import Img from "../../components/img/mig selv.jpg"
export default function Welcome() {
    return (
        <section className="welcome">
            <article className="welcomeIntroduction">
            <Introduction/>
            </article>
            <article onClick={()=> navigate("/whoAmI")} className="welcomeWhoamI">
            <h1 className="welcomeWhoamI__Headline">who am i?</h1>  
            </article>
            <article onClick={() => navigate("/motivation")} className="welcomeMotivation">
                <h1 className="welcomeMotivation__headline">my motivation</h1>

                </article>
                <article onClick={() => navigate("/background")} className="welcomeBackground">
                    <h1 className="welcomeBackground__headline">my Background</h1>
                
            </article>
            <section className="welcome2">
                <article className="welcome2__Kompetences">
                    <a className="welcome2__Kompetenceslink" href="">html</a>
                    <a className="welcome2__Kompetenceslink" href="">css/scss</a>
                    <a className="welcome2__Kompetenceslink" href="">jsx</a>
                    <a className="welcome2__Kompetenceslink" href="">javascript</a>
                    <a className="welcome2__Kompetenceslink" href="">react</a>
                    <a className="welcome2__Kompetenceslink" href="">react tecnics - hook forms/state/usecontext</a>

                </article>
                <article className="welcome2__Img">
                <img src={Img} alt="" />

                </article>

                <article className="welcome2__Kompetences2">
                    <a className="welcome2__Kompetences2link" href="">bem/variables</a>
                    <a className="welcome2__Kompetences2link" href="">router</a>
                    <a className="welcome2__Kompetences2link" href="">spa/components</a>
                    <a className="welcome2__Kompetences2link" href="">import fonts</a>
                    <a className="welcome2__Kompetences2link" href="">npm/yarn</a>
                    <a className="welcome2__Kompetences2link" href="">hosting netlify/github pages</a>
                </article>

            </section>


        </section>

    )
}