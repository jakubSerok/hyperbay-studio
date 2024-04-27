// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// import required modules
import { FreeMode, Pagination } from "swiper";

// service data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Tworzymy unikalną tożsamość marki.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Projektujemy atrakcyjne i intuicyjne strony.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Budujemy responsywne i dynamiczne strony.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "Tworzymy angażujące treści.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: " Zapewniamy widoczność w wyszukiwarkach.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex px-6 py-8 transition-all duration-300 rounded-lg cursor-pointer bg-black/90 h-max sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-black dark:bg-white hover:dark:bg-white">
              {/* icon */}
              <div className="mb-4 text-4xl text-accent">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg dark:text-black">{item.title}</div>
                <p className="max-w-[350px] leading-normal dark:text-black/90">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="transition-all duration-300 group-hover:rotate-45 group-hover:text-accent dark:text-black" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
