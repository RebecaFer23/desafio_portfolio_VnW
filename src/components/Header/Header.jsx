import { Link } from 'react-router-dom';
import * as S from './styled'
import * as C from '../Cursor_styles'
import Logo from '../../assets/images.jpeg'
import { useState } from 'react';


export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <S.Header>
      <S.BoxLogo>
        <img src={Logo} alt="" />
        <button onClick={() => setMenuOpen(!menuOpen)} className="menu-button">{menuOpen ? "X" : "☰"}</button>
      </S.BoxLogo>
      <S.BoxContainer show={menuOpen}> {/* Passando a prop show com base no estado do menu hamburguer */}
        <nav>
        <ul>
          <C.Li><Link to="/">Inicio</Link></C.Li>
          <C.Li><Link to="/sobre">Sobre mim</Link></C.Li>
          <C.Li><Link to="/projetos">Meus projetos</Link></C.Li>
          <C.Li><Link to="/contato">Login e contato</Link></C.Li>
        </ul>
      </nav>
      </S.BoxContainer>
    </S.Header>
  )
}
