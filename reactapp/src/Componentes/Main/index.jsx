import './style.css'
import User from '../../assets/user.jpg'
function Main(){
    return(
        <>
         <div className="main">
        <img src={User} alt="Foto de perfil" />
        
        <h1>Murilo Fernandes Mello</h1>
        <h2>Estudante no Colégio Ulbra São Lucas</h2>
        <p>Tecnologias que mais gosto: </p>
        <ul>
            <li>Hardware geral</li>
            <li>Sql</li>
            <li>Linux</li>
        </ul>
    </div>
        </>
    )
}

export default Main