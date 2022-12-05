/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Menu } from "ui";
import { TitleSuperdata } from "ui";
import { Footer } from "ui";
import { motion } from "framer-motion";
import { generateJSXMeshGradient } from "meshgrad";
const ELEMENTS = 12;

export default function Home() {
  console.log("✅ Pylar AI");
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-black">
      <Head>
      <title>SuperData</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Menu />
      <main>
        <TitleSuperdata />
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="m-3 flex flex-col items-center justify-center">
              <h2 className="py-4 text-center text-2xl font-bold text-white">
                Discover the power of AI in your business with Pylar and SuperDatas
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center py-8">
              <p className="text-center text-2xl font-bold text-white">
              SuperData is a high-quality, reliable server upstream service provider that is part of the Pencil initiative.              </p>
            </div>
          </motion.div>
          <div className="superdataDiv">
            <p className="">
              SuperData services, as a part of the Pencil initiative, are a
              great example of a solid server upstream service. These services
              are designed to handle a large amount of data traffic without
              interruption or delay, ensuring that websites and other online
              services can operate smoothly and efficiently. SuperData services
              are known for their reliability, speed, and scalability, allowing
              them to easily adapt to changes in traffic and user demand. As
              part of the Pencil initiative, SuperData services are committed to
              providing high-quality, reliable server upstream services to
              businesses and organizations around the world.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
