"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import TextSpan from "./components/TextSpan";


export default function HomePage() {
  const welcomeSentence = "Welcome To Nerd Token".split("");


  return (
    <div className="w-full h-full flex justify-center items-center  ">
      <div className="text-center ">
        <motion.h1
          className="text-6xl mb-8 flex"
          initial={{ translateY: -500, opacity: 0 }}
          animate={{ translateY: -10, opacity: 1 }}
          
          
        >
          {welcomeSentence.map((letter, index) => (
            <TextSpan key={index}>{letter === " " ? '\u00A0' : letter}</TextSpan>
          ))}
        </motion.h1>
        <motion.p
          className="hover:bg-dark-blue bg-[#4d70ab] text-main w-32 py-2 rounded-lg m-auto duration-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{ duration: 0.3, delay: .8, type: "tween" }}
        >
          <Link href="/login" style={{ padding: "8px 30px" }}>
            Lets Start
          </Link>
        </motion.p>
      </div>
    </div>
  );
}
