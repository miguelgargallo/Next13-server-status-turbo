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
      <div className="flex flex-row items-center justify-between bg-gradient-to-r from-black to-green-700">
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/">SuperData&trade;</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/app">App</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/cloud">Cloud</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/dev">Dev</a>
        </button>
      </div>
    </div>
  );
};
