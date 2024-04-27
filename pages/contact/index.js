// components
import Circles from "/components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full dark:bg-black">
      <div className="container flex items-center justify-center h-full py-32 mx-auto text-center xl:text-left">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-4 text-center text-black h2 dark:text-white"
          >
            Napisz do <span className="text-accent ">nas.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col flex-1 w-full gap-6 mx-auto"
          >
            {/* input group */}
            <div className="flex w-full gap-x-6">
              <input
                type="text"
                placeholder="Imie"
                className="placeholder-white bg-black input dark:bg-white dark:placeholder-black"
              />
              <input
                type="text"
                placeholder="Email"
                className="placeholder-white bg-black input dark:bg-white dark:placeholder-black"
              />
            </div>
            <input
              type="text"
              placeholder="Tytuł"
              className="placeholder-white bg-black input dark:bg-white dark:placeholder-black"
            />
            <textarea
              placeholder="Wiadomość"
              className="placeholder-white bg-black textarea dark:bg-white dark:placeholder-black"
            ></textarea>
            <button className="btn rounded-full border border-black text-black max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group dark:border-white dark:text-white">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Pogadajmy
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
