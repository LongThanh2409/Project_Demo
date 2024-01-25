import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative, Autoplay } from "swiper/modules";
export const Banner: FC = () => {
  const listBanner = [
    "https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
    "https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/tfw5LKySp7uEYJ3CUuD4TKx3s8y.jpg",
    "https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/tt79dbOPd9Z9ykEOpvckttgYXwH.jpg",
    "https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/pQvqGK6KQDILL7SJrhMQsRvJfLB.jpg",
    "https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
    "https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/u0BDggs80FG9tyZwxWTzVTDQls0.jpg",
    "https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/SqAZjEqqBAYvyu3KSrWq1d0QLB.jpg",
    "https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/ctxm191q5o3axFzQsvNPlbKoSYv.jpg",
  ];
  return (
    <div className="relative">
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay]}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        className="mySwiper"
        loop
      >
        {listBanner.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt="" className="w-full h-[400px]" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="w-full h-5 absolute -bottom-2 z-10 blur-md"
        style={{
          backgroundImage:
            "linear-gradient(0deg, hsl(0deg 0% 100%) 0%, hsl(0deg 0% 95%) 6%, hsl(0deg 0% 89%) 15%, hsl(0deg 0% 83%) 26%, hsl(0deg 0% 77%) 39%, hsl(0deg 0% 70%) 53%, hsl(0deg 0% 77%) 66%, hsl(0deg 0% 83%) 77%, hsl(0deg 0% 89%) 86%, hsl(0deg 0% 95%) 94%, hsl(0deg 0% 100%) 100%)",
        }}
      ></div>
    </div>
  );
};
