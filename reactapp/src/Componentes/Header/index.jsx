import './style.css'
import Git from '../../assets/github.png'
import Link from '../../assets/linkedin.png'
function Header(){
    return(
        <>
        <header>
        <div className="links">
            <a href="https://github.com/Murilo-FernandesMello" target="_blank"/>
                <img src={Git} alt="Icone do Github"/>
            
            <a href="https://linkedin.com/in/seu-usuario" target="_blank"/>
                <img src={Link} alt="Icone do Linkedin"/>
            
        </div>
        <div className="title">
            <h1>Trabalho de React</h1>
        </div>
        </header>
        </>
    )
}

export default Header