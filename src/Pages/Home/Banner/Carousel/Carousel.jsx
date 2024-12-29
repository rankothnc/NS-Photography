import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import './Carousel.css';

const Carousel = () => {
    return (
      <>
        <div className="container">
          <Swiper
            spaceBetween={30}
            autoplay={{ delay: 2300, disableOnInteraction: false }}
            speed={800}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            modules={[Autoplay, EffectCoverflow]}
          >
            <SwiperSlide>
              <img
                loading="lazy"
                //src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/272292014_10220488042340158_1725983990911146442_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGu96uR0Y1S1bApYRWjXEdTlZaf-TsZK46Vlp_5Oxkrjk0AlyPclawd-OgJVQx1gKTwHSpfk_n0hQmLCCkiVQ-I&_nc_ohc=pybHVfTSs3IQ7kNvgE5oNcT&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=A3agkVn9HzJV2hTwmn4c9JB&oh=00_AYDE1nP_uIqUrWLvvkgFMYHWBl5cCnS3yOpdAoOY-egbrg&oe=66FC9B64"
                alt="football"
                className="relative"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                //src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/270943440_10220381493956515_5469365544784853177_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGRP0GsEUeKFpcr5TQ7d5k4utR113p6IeW61HXXenoh5Y_zx4r4_hS8nOKuf_mKTv4VO4laaJpwEwln5q4By4Uu&_nc_ohc=9ulk_zUXwVkQ7kNvgEfW8fq&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYAKbccimqRB7_1KaMiLSq36NWGfbuf6umF_zaqe287UYA&oe=66FCCD75"
                alt="cricket"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                //src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/270203914_10220364945582816_3934208828122104966_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFxd2x82UGNc7zrWlgbvbJjwK4ecfuJGUfArh5x-4kZR72pfgs2AU-E_6k69-8OIjWRnMcbrqTwnQDgL3jdKXah&_nc_ohc=_t07kgIXu6kQ7kNvgG8nkGs&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=AWNAZ_aBnozY49ozYyAnqae&oh=00_AYAnDCN0pRD6Pr7DnvSSISg8RXaGToS1AqlmpcIP4nAGMQ&oe=66FCAEF6"
                alt="tennis"
              />
            </SwiperSlide>
            {/* <SwiperSlide>
              <img
                loading="lazy"
                //src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/267956046_10220318277176135_4830965881955223042_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG8nybIqYoXUNaSB1Hgl4vNX2oaaSNBct1fahppI0Fy3b6qiIcUgWX6AYs5glAMlq_c2a1rW39yGQyLX2AxqHB2&_nc_ohc=iZe9qT21neAQ7kNvgGIa5AF&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=ASbGdLtWCiVkepsVHLFsopH&oh=00_AYAZKzGHm172dzUYFj3WdTAx1zVEq_JxIyYmtRxTQs7AsQ&oe=66FCA3C0"
                alt="badminton"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                //src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/311505447_10221579421863964_6759207558974904416_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHY5S8S1eQkDXXSur4B7XpjJBC2-DAq5CAkELb4MCrkIEjxA97SMBeoL2uyPGCJ0q53TXSGq0qtDsQmaE7cQt7V&_nc_ohc=Qv2H-vcHkw4Q7kNvgHBysbH&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=A_0RZjkxGFDLHwY72MXjpi4&oh=00_AYCP2xHnFw8A6tLf1aXV2HCaktB3e1FuO3lpPoCxIbwZjA&oe=66FCA409"
                alt="rugby"
              />
            </SwiperSlide> */}
            <SwiperSlide>
              <img
                loading="lazy"
                //src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/448176650_10224831089273617_6966249034914803967_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH1wOPY9OOcE2In9oMo086lv2njawrFV-a_aeNrCsVX5iV1LZ1fKj_G-grsMUKFGbEAR8WgdglkMjsZyqb6LeuS&_nc_ohc=w8eQTZEHPHsQ7kNvgEgfs95&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=AYwSPy14JBBeSj4dqlG5tJv&oh=00_AYDKmgAsgUcYEk2Y6r3GFvMDggq1U3xG4OVl2TCzeqWVPw&oe=66FCAF66"
                alt="baseball"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                //src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/459724954_10225605323468988_6733506522031328839_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeELYYYKLLKk7zV7TMMU_yIUcn9CDDYqjANyf0IMNiqMA5P1FaCFkHWJWtnfu23wZKNFhn8hiQgMpqYyDuPbAOVY&_nc_ohc=UJ_On7x9hC0Q7kNvgH04KrJ&_nc_ht=scontent.fcmb1-2.fna&oh=00_AYD4_S0K678-qNu-yRh7qqCA14_qEfUlq-CZK_K3z1n5iw&oe=66FCB182"
                alt="basketball"
              />
            </SwiperSlide>
            
          </Swiper>
        </div>
      </>
    );
};

export default Carousel;