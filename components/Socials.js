// links
import Link from "next/link";

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from "react-icons/ri";
import ThemeToogle from "./ThemeToggle";
const Socials = () => {
  return (
    <div className="flex items-center text-lg text-black gap-x-5 dark:text-white">
      <Link
        href={""}
        className="transition-all duration-300  hover:text-accent"
      >
        <RiYoutubeLine className="h-[20px] w-[20px]" />
      </Link>
      <Link
        href={""}
        className="transition-all duration-300  hover:text-accent"
      >
        <RiFacebookLine className="h-[20px] w-[20px]" />
      </Link>
      <Link
        href={""}
        className="transition-all duration-300  hover:text-accent"
      >
        <RiInstagramLine className="h-[20px] w-[20px]" />
      </Link>
      <ThemeToogle />
    </div>
  );
};

export default Socials;
