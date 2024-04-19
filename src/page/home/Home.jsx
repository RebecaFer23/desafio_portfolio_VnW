import Header from "../../components/Header/Header"
import * as S from "./styled"

export default function Home() {
  return (
    <S.Main>
      <Header/>
      <S.Container>
        <h1>Bem vindo, bem vinda!</h1>
        <p>Sou Rebeca Ferreira</p>
      </S.Container>
    </S.Main>
  )
}

