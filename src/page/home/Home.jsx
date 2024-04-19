import Header from "../../components/Header/Header"
import * as S from "./styled"
import perfil1 from "../../assets/perfil1.png"

export default function Home() {
  return (
    <S.Main>
      <Header />
      <S.Container>
        <div>
          <h1>Rebeca Ferreira</h1>
          <p>Web developer</p>
        </div>
        <img src={perfil1} alt="" />
      </S.Container>
    </S.Main>
  )
}

