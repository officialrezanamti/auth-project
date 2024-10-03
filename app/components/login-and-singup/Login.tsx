"use client";
import { Iprop } from "@/types/types";
import { motion } from "framer-motion";
import Input from "./components/Inputs";

export default function Login({ setIsLogin, isLogin }: Iprop) {
  return (
    <div className="w-full h-full flex flex-col md:flex-row overflow-hidden">
      <motion.div
        initial={{ x: 600 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4}}
        className="h-full  md:w-[60%] flex flex-col gap-6 justify-center items-center text-dark-blue"
      >
        <h1 className="md:text-5xl text-xl md:mb-6">Login To Your Account</h1>

        <Input name="email" placeHolder="Email@example.com" type="text" />
        <Input name="password" placeHolder="Password" type="password" />
        <button className="bg-dark-blue text-main md:w-[40%] w-[95%]  py-2 rounded-md hover:text-dark-blue hover:bg-main hover:border-dark-blue border duration-200 ">
          Login
        </button>
      </motion.div>
      {/* right side */}
      <motion.div
        initial={{ x: -1000 }}
        transition={{ duration: 0.4}}
        animate={{ x: 0 }}
        className=" bg-dark-blue flex flex-col gap-3 text-white  justify-center items-center h-full md:w-[40%]"
      >
        <p className="md:text-4xl text-xl text-center w-[400px]">New Here?</p>
        <p className=" md:w-[400px] text-center md:leading-7 md:text-[18px] text-[12px]">
          Sign up and discover a great amount of new opportunities.
        </p>
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="bg-main text-dark-blue px-10  text-[14px] md:text-[16px] py-1 mt-2 border hover:border-main rounded-md hover:bg-dark-blue hover:text-main duration-300"
        >
          Sign Up
        </button>
      </motion.div>
    </div>
  );
}
