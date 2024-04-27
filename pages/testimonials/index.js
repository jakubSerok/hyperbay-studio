// components
import TestimonialSlider from "../../components/TestimonialSlider";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="h-full py-32 text-center dark:bg-black">
      <div className="container flex flex-col justify-center h-full mx-auto">
        {/* title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-2 text-black h2 xl:mb-0 dark:text-white"
        >
          Co mówią <span className="text-accent">klienci.</span>
        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
