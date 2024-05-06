import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .my-swiper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30.5rem;
  }
  h3 {
    color: #000;
  }
`;
export const BoxSlide = styled.div`
  /* border: solid 2px red; */
  margin: 0px 10px;
  width: 90vw;
  .slide-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;