"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Login from "@/app/components/login-and-singup/Login";
import SignUp from "@/app/components/login-and-singup/SignUp";
export default function Home() {
  const [isLogin, setIsLogin] = useState(true);
  if (isLogin) {
    return <Login setIsLogin={setIsLogin} isLogin={isLogin} />;
  }
  return <SignUp setIsLogin={setIsLogin} isLogin={isLogin} />;
}
