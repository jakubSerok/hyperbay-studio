// next image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import TopLeftImg from "../components/TopLeftImg";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="h-full ">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r ">
        <div className="container flex flex-col justify-center h-full mx-auto text-center xl:pt-40 xl:text-left ">
          {/* title */}

          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-black h1"
          >
            Twoja strona, <br />{" "}
            <span className="text-accent">Twoje sukcesy</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm mx-auto mb-10 text-black xl:max-w-xl xl:mx-0 xl:mb-16"
          >
            Jesteśmy zespołem pasjonatów, specjalizujących się w tworzeniu
            wyjątkowych stron internetowych. Nasze projekty nie tylko zachwycają
            designem, ale także gwarantują funkcjonalność, która przyciąga
            klientów. Pozwól nam stworzyć stronę, która będzie wizytówką Twojej
            marki w wirtualnym świecie.
          </motion.p>
          {/* btn */}
          <div className="relative flex justify-center xl:hidden">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}

        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
