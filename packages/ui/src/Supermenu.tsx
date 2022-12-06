import { motion, useScroll } from "framer-motion";
import "./styles.css";
import { PencilLogo } from "./PencilLogo";
import { PylarLogo } from "./PylarLogo";
import { SuperdataLogo } from "./SuperdataLogo";

export const Supermenu = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="hidden sm:block">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="flex flex-row items-center justify-between bg-gradient-to-r from-black to-black">
        <PencilLogo />
        <PylarLogo />
        <SuperdataLogo />
        
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
            href="https://superdatas.dev"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            SuperDatas&trade; AI
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
      </div>
    </div>
  );
};
