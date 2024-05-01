import Header from '../../components/Header/Header'
import * as S from './styled'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import port from "../../assets/img/OIP (1).jpg"
import oip from "../../assets/img/OIP.jpg"
import pc from "../../assets/img/pc.gif"
import skill from "../../assets/img/skill.webp"
import cod from "../../assets/img/cod.webp"

export default function Projetos() {

  const slides = [port, oip, pc, skill, cod]

  return (
    <S.Main>
      <Header />
      <S.Container>
        <S.BoxSlide>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            effect='cards'
            // autoplay={{delay: 1000}}
            loop= {true}
            // slidesPerView="2"
            navigation={true}
            pagination={{ clickable: true }}
            className='my-swiper'>
            {slides.map((slide, index) =>
              <SwiperSlide key={index} className='slide-item'>
                <img src={slide} alt={'Slide ${index + 1}'} />
              </SwiperSlide>
            )}
          </Swiper>
        </S.BoxSlide>
      </S.Container>
    </S.Main>
  );
};