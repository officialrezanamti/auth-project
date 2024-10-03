"use client";
import { Iprop } from "@/types/types";
import { motion } from "framer-motion";
import Input from "./components/Inputs";
export default function SignUp({ setIsLogin, isLogin }: Iprop) {
  return (
    <div className="w-full h-full flex flex-col md:flex-row overflow-hidden" >
      <motion.div
        transition={{ duration: 0.4 }}
        initial={{ x: 700 }}
        animate={{ x: 0 }}
        className=" bg-dark-blue flex flex-col gap-3 text-white  justify-center items-center h-full md:w-[40%] z-40"
      >
        <p className="md:text-4xl text-xl text-center w-[400px]">Welcome Back!</p>
        <p className=" md:w-[400px] text-center md:leading-7 md:text-[18px] text-[12px]">
          Already have an account? Sign in to use Nerd Token.
        </p>
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="bg-main text-dark-blue px-10 py-1 mt-2 border hover:border-main rounded-md hover:bg-dark-blue hover:text-main duration-300"
        >
          Login
        </button>
      </motion.div>

      {/* right side */}
      <motion.div
        transition={{ duration: 0.4}}
        initial={{ x: -700 }}
        animate={{ x: 0 }}
        className="h-full md:w-[60%] flex flex-col gap-6 justify-center items-center text-dark-blue pt-10 z-20"
      >
        <h1 className="md:text-5xl text-xl">Sign Up </h1>

        <Input name="full-name" placeHolder="Full Name" type="text" />
        <Input name="full-name" placeHolder="Email Address" type="text" />
        <Input name="password" placeHolder="Password" type="password" />
        <button className="bg-dark-blue text-main md:w-[40%] w-[95%] py-2 rounded-md hover:text-dark-blue hover:bg-main hover:border-dark-blue border duration-200 ">
          Sign Up
        </button>
      </motion.div>
    </div>
  );
}
