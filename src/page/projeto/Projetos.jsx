import Header from '../../components/Header/Header'
import * as S from './styled'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import book from "../../assets/img/book.png"
import movies from "../../assets/img/movies.png"
import ods from "../../assets/img/ODS.png"
import elemental from "../../assets/img/elemental.png"
import flicky from "../../assets/img/flicky.png"
import calculator from "../../assets/img/calculator.png"
import galery from "../../assets/img/galery.png"
import relog from "../../assets/img/relog.png"
import wiki from "../../assets/img/miniWiki.png"
import life from "../../assets/img/life.png"
import carrinho from "../../assets/img/carrinho.png"
import mec from "../../assets/img/mequi.png"

export default function Projetos() {

  const slides = [book, movies, ods, elemental, flicky, calculator, galery, relog, wiki, life, carrinho, mec]

  return (
    <S.Main>
      <Header />
      <S.Container>
          <S.Nav>
        <S.BoxSlide>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            effect='cards'
            // autoplay={{delay: 3000}}
            loop= {true}
            slidesPerView="1"
            navigation={true}
            pagination={{ clickable: true }}
            className='my-swiper swiper-pagination-container'>
            {slides.map((slide, index) =>
              <SwiperSlide key={index} className='slide-item'>
                <img src={slide} alt={'Slide ${index + 1}'} />
              </SwiperSlide>
            )}
          </Swiper>
        </S.BoxSlide>
        </S.Nav>
      </S.Container>
    </S.Main>
  );
};