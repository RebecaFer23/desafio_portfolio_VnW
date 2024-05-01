import { useState } from "react";
import Header from "../../components/Header/Header";
import * as S from "./styled";

export default function Sobre() {
  const [virados, setVirados] = useState(new Array(1).fill(true));
  const sobre = [
    {
      texto1:
        "Sou estudante de desenvolvimento web, com foco especializado em Front-End. Sou proativa, persistente,  apaixonada por tecnologia e aprecio muito ver e realizar projetos desde o zero absoluto.",
    },
    {
      texto2:
        "Além do desenvolvimento web, tenho uma paixão por artes (especialmente pintura em tela),  sou uma ávida leitora de livros fictícios, amo cozinhar doces deliciosos,  apreciar música clássica e animações. Tudo isso me permite passar meu tempo livre expressando minha criatividade.",
    },
    {
      texto3:
        "Estou empenhada em aprimorar minhas habilidades em desenvolvimento web e buscar oportunidades para me destacar como uma desenvolvedora Front-End. Meu objetivo é contribuir para projetos emocionantes e inovadores, ajudando também os usuáriosa terem experiências digitais mais intuitivas e gratificantes.",
    },
    {
      texto4:
        "Trabalhei como Auxiliar de Desenvolvimento Infantil em uma creche por quase quatro anos, onde tive a oportunidade de nutrir e apoiar o crescimento e desenvolvimento das crianças. Apesar de ser apaixonada por crianças e gostar da rotinapuxada, vi que essa jornada não era a minha. Durante esse tempo, meu interesse pela tecnologia começou a florescer gradualmente.",
    },
    {
      texto5:
      "Com a minha necessidade em buscar nova área e por conta da Pandemia, haviam diversos cursos e tutoriais online, os quais fui explorando. Descobri o desenvolvimento Front-End e me identifiquei, me inscrevendo no curso 'Elas na Tech'. Recebi apoio valioso da equipe e, ao final, apaixonei pela tecnologia e pelo Front-End.",
    },
    {
      texto6:
        "Para elevar minhas habilidades de maneira eficaz, decidi me matricular no curso Vai na Web. Pude aprimorar rapidamente minhas habilidades em HTML, CSS, JavaScript e conheci o framework React, uma experiência incrível que me proporcionou uma base sólida no Front-End e me preparou para os desafios mais complexos que enfreitarei nessa área.",
    },
  ];

  const handleClick = (index) => {
    const newVirados = [...virados];
    newVirados[index] = !newVirados[index];
    setVirados(newVirados);
  };

  return (
    <S.Main>
      <Header />
      <S.Container>
        <S.Row>
          {virados.map((virado, index) => (
            <S.Card
            className="sobre"
              key={index}
              virado={virado}
              onClick={() => handleClick(index)}
              style={{ background: getColor(index) }} 
            >
              <S.Frente>
                <h2>Sobre Mim</h2>
              </S.Frente>
              {sobre.map(
                (item, texto1, texto2, texto3, texto4, texto5, texto6) => (
                  <S.Verso>
                    <p>{item.texto1}</p>
                  </S.Verso>
                )
              )}
            </S.Card>
          ))}

          {virados.map((virado, index) => (
            <S.Card
            className="interesses"
              key={index}
              virado={virado}
              onClick={() => handleClick(index)}
              style={{ background: getColor(1) }} 
            >
              <S.Frente>
                <h2>Meus interesses</h2>
              </S.Frente>
              {sobre.map((item) => (
                <S.Verso>
                  <p>{item.texto2}</p>
                </S.Verso>
              ))}
            </S.Card>
          ))}
          {virados.map((virado, index) => (
            <S.Card
            className="objetivos"
              key={index}
              virado={virado}
              onClick={() => handleClick(index)}
              style={{ background: getColor(2) }} 
            >
              <S.Frente>
                <h2>Meus objetivos</h2>
              </S.Frente>
              {sobre.map((item) => (
                <S.Verso>
                  <p>{item.texto3}</p>
                </S.Verso>
              ))}
            </S.Card>
          ))}
          {virados.map((virado, index) => (
            <S.Card
            className="experiencia"
              key={index}
              virado={virado}
              onClick={() => handleClick(index)}
              style={{ background: getColor(3) }} 
            >
              <S.Frente>
                <h2>Minha experiência</h2>
              </S.Frente>
              {sobre.map((item) => (
                <S.Verso>
                  <p>{item.texto4}</p>
                </S.Verso>
              ))}
            </S.Card>
          ))}
          {virados.map((virado, index) => (
            <S.Card
            className="jornada"
              key={index}
              virado={virado}
              onClick={() => handleClick(index)}
              style={{ background: getColor(4) }} 
            >
              <S.Frente>
                <h2>Minha jornada</h2>
              </S.Frente>
              {sobre.map((item) => (
                <S.Verso>
                  <p>{item.texto5}</p>
                </S.Verso>
              ))}
            </S.Card>
          ))}
          {virados.map((virado, index) => (
            <S.Card
            className="aprimoramento"
              key={index}
              virado={virado}
              onClick={() => handleClick(index)}
              style={{ background: getColor(5) }} 
            >
              <S.Frente>
                <h2>Meu aprimoramento</h2>
              </S.Frente>
              {sobre.map((item) => (
                <S.Verso>
                  <p>{item.texto6}</p>
                </S.Verso>
              ))}
            </S.Card>
          ))}
        </S.Row>
      </S.Container>
    </S.Main>
  );
}

function getColor(index) {
  const gradients = [
    "linear-gradient(45deg, #9d89b1 40%, #410aa8d1 60%)",
    "linear-gradient(to left, #0dff72b2 40%, #8af1a4e1 70%)",
    "linear-gradient(to top, #e919bccf 45%, #f0bff0 85%)",
    "linear-gradient(to right, #f1c3c3 10%, #e01616c8 60%)",
    "linear-gradient(to top, #1b47d6d1 50%, #44e0f5 75%)",
    "linear-gradient(-0.1turn, #e7ec97 40%, #fcff32c1 60%)",
  ];
  return gradients[index % gradients.length];
}