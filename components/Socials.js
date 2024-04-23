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

const Socials = () => {
  return (
    <div className="flex items-center text-lg gap-x-5">
      <Link
        href={""}
        className="text-black transition-all duration-300 hover:text-accent "
      >
        <RiYoutubeLine className="h-[20px] w-[20px]" />
      </Link>
      <Link
        href={""}
        className="text-black transition-all duration-300 hover:text-accent "
      >
        <RiFacebookLine className="h-[20px] w-[20px]" />
      </Link>
      <Link
        href={""}
        className="text-black transition-all duration-300 hover:text-accent "
      >
        <RiInstagramLine className="h-[20px] w-[20px]" />
      </Link>
    </div>
  );
};

export default Socials;
