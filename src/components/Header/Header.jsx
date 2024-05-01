import { Link } from 'react-router-dom';
import * as S from './styled'
import Logo from '../../assets/img/images.jpeg'
import { useState } from 'react';


export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <S.Header>
      <S.BoxLogo>
        
          <Link to="/"><img src={Logo} alt="" /></Link>
        <button onClick={() => setMenuOpen(!menuOpen)} className="menu-button">{menuOpen ? "X" : "☰"}</button>
      </S.BoxLogo>
      <S.BoxContainer show={menuOpen}>
        <nav>
        <ul>
          <Link to="/sobre">Sobre mim</Link>
          <Link to="/projetos">Meus projetos</Link>
          <Link to="/skills">Minhas skills</Link>
        </ul>
      </nav>
          <Link to="/contato" className='loginButton'>Login e contato</Link>
      </S.BoxContainer>
    </S.Header>
  )
}
