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
        <title>Applications</title>
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
              <div className="flex flex-col items-center justify-center py-8">
              <button className="text-black bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  <a href="https://pencil.li">Discover Pylar&trade; AI</a>
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="superdataDiv"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            The use of AI in the business sector is rapidly increasing, with
            many organizations implementing AI and machine learning (ML)
            technologies to improve their operations and better serve their
            customers. In the AI sector, these technologies are often used to
            automate tasks, improve decision making, and gain insights from
            large amounts of data. One of the key applications of AI in the
            business sector is in the area of data management. Machine learning
            algorithms can be used to analyze and process large amounts of data,
            identify patterns and trends, and make predictions about future
            outcomes. This can help businesses better understand their
            customers, improve their products and services, and make more
            informed decisions. Another common use of AI in the business sector
            is in the area of customer service. By using natural language
            processing (NLP) and other AI technologies, businesses can automate
            their customer service operations, providing quick and accurate
            responses to customer inquiries and improving the overall customer
            experience. To manage these AI and ML technologies effectively,
            businesses need to have a robust server infrastructure in place.
            This is where SuperData services come in. By providing high-quality,
            reliable server upstream services, SuperData enables businesses to
            handle large amounts of data traffic without interruption or delay.
            This ensures that AI and ML technologies can operate smoothly and
            efficiently, allowing businesses to fully leverage the power of
            these technologies to improve their operations.
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
