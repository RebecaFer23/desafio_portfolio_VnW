import Header from "../../components/Header/Header"
import * as S from "./styled"
import fotoInicio from "../../assets/img/perfil1.png"
import meuCV from '../../assets/curriculo.pdf'

export default function Home() {
  return (
    <S.Main>
      <Header />
      <S.Container>
        <S.Title>
          <h1>Olá, sou Rebeca Ferreira</h1>
          {/* <h3>Web developer</h3> */}
          <p>Sou estudante de desenvolvimento web, com foco especializado em Front-End. Sou apaixonada por tecnologia e adoro ver projetos se desenvolvendo do zero absoluto.</p>
        <S.Cv href={meuCV} target="blank">Currículo</S.Cv>
        </S.Title>
        <img src={fotoInicio} alt="imagem de perfil" />
      </S.Container>
    </S.Main>
  )
}

