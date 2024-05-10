import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .my-swiper {
    height: 30.5rem;
  }
  
  .swiper-pagination-container {
    text-align: center;
  }
  
`;

export const BoxSlide = styled.div`
  width: 98vw;
  height: 30.6rem;
  .slide-item img {
    width: 81%;
    height: 100%;
    object-fit: cover;
  }
  
  .swiper-pagination-bullet {
    background-color: #1d0101;
    width: 10px;
    height: 10px;
    border: 1px solid #ffffff;
    box-shadow: 0px 1px 5px rgb(255, 255, 255);
  }

  .swiper-pagination-bullet-active {
    background-color: #021d1d;
    width: 8px;
    height: 8px;
  }
`;

export const Nav = styled.div`
  .swiper-button-prev,
  .swiper-button-next {
    color: #10d6dd;
  }

  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    color: rgb(231, 238, 240);
    text-shadow: 0px 1px 8px #10d6dd;
  }
`;
