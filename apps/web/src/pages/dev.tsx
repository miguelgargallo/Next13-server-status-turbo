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
        <title>Pylar AI by Pencil</title>
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
                Discover the power of AI in your business with Pylar and
                SuperDatas
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center py-8">
              <p className="text-center text-2xl font-bold text-white">
                SuperData is a high-quality, reliable server upstream service
                provider that is part of the Pencil initiative.{" "}
              </p>
            </div>
          </motion.div>
          <div className="superdataDiv">
            <p className="">
              The development of AI and machine learning (ML) technologies has
              brought about many new opportunities in the business sector. These
              technologies are being used to automate tasks, improve decision
              making, and gain insights from large amounts of data. One of the
              key areas where AI and ML are being applied is in the development
              of new products and services. By using these technologies,
              businesses can design and develop new products and services that
              are better tailored to their customers needs and preferences. For
              example, an e-commerce company may use AI and ML to design a
              personalized shopping experience for their customers, or a
              healthcare organization may use these technologies to develop new
              treatments for diseases. To effectively manage the development of
              AI and ML technologies, businesses need to have a robust
              infrastructure in place. This is where SuperData services come in.
              By providing high-quality, reliable server upstream services,
              SuperData enables businesses to handle large amounts of data
              traffic without interruption or delay. This ensures that AI and ML
              technologies can operate smoothly and efficiently, allowing
              businesses to fully leverage the power of these technologies in
              the development of new products and services. In summary, the
              development of AI and ML technologies is a key area of growth in
              the business sector. By using SuperData services, businesses can
              ensure that they have the infrastructure in place to effectively
              manage and develop these technologies, leading to improved
              products and services and enhanced customer experiences.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
