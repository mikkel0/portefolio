import "./introduction.scss"
import { navigate } from "@reach/router"
export default function Introduction() {
    return (
        <header className="introduction__Header" >
            <h1 className="headerIntroduction">velkommen til mit portefolio</h1>
            
            <i onClick={() => navigate("/")} class="fas fa-door-open"></i>
        </header>
    )
}