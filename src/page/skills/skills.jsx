import Header from "../../components/Header/Header";
import * as S from "./styled";
import HTML from "../../assets/img/html.png";
import CSS from "../../assets/img/css.png";
import JS from "../../assets/img/javascript.png";
import REACT from "../../assets/img/react.png";
import STYLED from "../../assets/img/styledcomponents.png";

export default function Projetos() {
  return (
    <S.Main>
      <Header />
      <S.SkillsContainer>
        <section>
          <div>
            <h2>Minhas habilidades</h2>
          </div>
          <div>
          <img src={HTML} className="HTMLwidth" alt="" />
          <img src={CSS} alt="" />
          <img src={JS} alt="" />
          <img src={REACT} alt="" />
          <img src={STYLED} alt="" />
          </div>
        </section>
        <section>
          <h3>
          Não seria possível chegar até aqui sem a ajuda de Deus, primeiramente. Em segundo lugar, sem a força e a trilha de aprendizado da escola Vai na Web. Por último, o auxílio e o apoio constante da minha família: meus pais, Davi e Elisangela; minhas irmãs, Hanna e Rafaella; e meu namorado, Filipe.
          </h3>
        </section>
      </S.SkillsContainer>
    </S.Main>
  );
}
