import { BrowserRouter, Route, Routes } from 'react-router-dom'
import * as C from './components/Cursor_styles'
import Home from "./page/home/Home"
import Sobre from './page/sobre/Sobre';
import Projetos from './page/projeto/Projetos';
import Skills from './page/skills/skills';
import Contato from './page/contato/Contato';
import { GlobalStyle } from './components/Header/styled';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <C.Main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </BrowserRouter>
      </C.Main>
    </>
  )
}
