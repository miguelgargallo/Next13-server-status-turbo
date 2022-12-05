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
          <div className="flex flex-col items-center justify-center py-8">
            <button className="rounded border-0 bg-green-500 py-2 px-6 text-lg text-black hover:bg-green-600 focus:outline-none">
              <a
                href="https://twitter.com/superdatas"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discover in 2023 at SuperDatas&trade; Twitter
              </a>
            </button>
          </div>
          <motion.div
            className="superdataDiv"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            In the AI sector, cloud services are increasingly being used to
            provide organizations with scalable and flexible computing resources
            for running AI and machine learning (ML) algorithms. These services
            allow businesses to access powerful computing resources, such as
            GPUs and TPUs, on-demand, without the need to invest in expensive
            hardware. One of the key benefits of using cloud services for AI and
            ML is the ability to easily scale up or down based on the needs of
            the business. This allows organizations to efficiently allocate
            resources and avoid overprovisioning or underprovisioning. Another
            benefit of cloud services is the ability to easily access and
            process large amounts of data. Many cloud providers offer services
            for storing, organizing, and analyzing data, making it easy for
            businesses to gain insights from their data and improve their AI and
            ML algorithms. To effectively manage AI and ML in the cloud,
            organizations need to have the right tools and infrastructure in
            place. This is where SuperData services come in. As part of the
            Pencil initiative, SuperData provides high-quality, reliable server
            upstream services that are designed to handle large amounts of data
            traffic without interruption or delay. This ensures that AI and ML
            algorithms can run smoothly and efficiently, allowing businesses to
            fully leverage the power of cloud computing for AI and ML.
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
