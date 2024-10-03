"use client";
import Lottie from "react-lottie";
import * as notfound from "./inimation/404 Lost In Space.json";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
export default function NotFound() {
  const router = useRouter();
  const notFound = {
    loop: true,
    autoplay: true,
    animationData: notfound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie
        style={{ cursor: "default" }}
        options={notFound}
        height={754}
        isClickToPauseDisabled={true}
      ></Lottie>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-5 right-[150px] text-white rounded-sm duration-150 hover:shadow-slate-300 hover:shadow-lg  w-24 bg-dark-blue flex justify-center cursor-pointer"
        onClick={() => router.back()}
      >
        Go Back
      </motion.p>
    </div>
  );
}
