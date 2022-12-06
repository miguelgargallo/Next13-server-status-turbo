import { Version } from "./Version";
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
      <div className="flex flex-row items-center justify-between bg-gradient-to-r from-black to-green-700">
{/*         <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/app">App</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/dev">Dev</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/cloud">Cloud</a>
        </button> */}
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/">SuperData&trade;</a>
        </button>
        <button className="hidden rounded-xl py-2 px-4 font-bold text-white sm:block">
          <a
            href="https://pencil.li"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Pencil Domains&trade;
          </a>
        </button>
        <button className="hidden rounded-xl py-2 px-4 font-bold text-white sm:block">
          <a
            href="https://pylar.org"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Pylar&trade; AI
          </a>
        </button>
        <button className="hidden rounded-xl py-2 px-4 font-bold text-white sm:block">
          <a
            href="https://itamaesan.org"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            ITAMAESAN&trade;
          </a>
        </button>
        <div
          className="hidden py-2 px-4 font-bold text-white md:block"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <button className="hidden py-2 px-4 font-bold text-white md:block">
            <a
              href="http://twitter.com/superdatas"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </button>
          <Version />
        </div>
      </div>
    </div>
  );
};
