// testimonial slider data
export const testimonialSlider = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Klient",
    message:
      "Współpraca z tym studiem okazała się strzałem w dziesiątkę, nasza oferta stała się bardziej atrakcyjna i łatwiej dostępna dla klientów!",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "Klient",
    message:
      "HyperBay dostarczyło nam stronę internetową, która spełnia wszystkie nasze potrzeby.",
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon Doe",
    position: "Klient",
    message:
      "Obsługa klienta jest profesjonalna,szybko reagują na wszelkie pytania czy wątpliwości, co zwiększa moje zaufanie do zakupów online!",
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

// icons
import { FaQuoteLeft } from "react-icons/fa";
// next image
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center h-full px-16 py-4 bg-black/90 rounded-2xl md:flex-row gap-x-8 dark:bg-white">
              {/* avatar, name, position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mx-auto mb-2">
                    <Image src={person.image} width={80} height={80} alt="" />
                  </div>
                  {/* name */}
                  <div className="text-lg dark:text-black">{person.name}</div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest dark:text-black">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 xl:before:dark:bg-black/70">
                {/* quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="mx-auto text-4xl xl:text-6xl text-white/20 md:mx-0 dark:text-black/70" />
                </div>
                {/* message */}
                <div className="text-center xl:text-lg md:text-left dark:text-black">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
