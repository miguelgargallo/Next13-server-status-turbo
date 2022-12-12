import { MenuAlpha } from "./MenuAlpha";
import { motion, useScroll } from "framer-motion";
import "./styles.css";

export const Menu = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="hidden sm:block">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <MenuAlpha />
      <div className="flex flex-row items-center justify-between bg-gradient-to-r from-blue-400 to-blue-500">
        <button className="px-8 py-2 font-bold text-white">
          <a href="/app"
          >Cloud</a>
        </button>
        <button className="py-2 font-bold text-white">
          <a href="/cloud"
          >App</a>
        </button>
        <button className="px-8 py-2 font-bold text-white">
          <a href="/dev"
          >Dev</a>
        </button>
      </div>
    </div>
  );
};
