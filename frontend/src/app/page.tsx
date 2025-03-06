"use client";
import Link from "next/link";
import Icon from "/public/paisabank-icon.svg";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginForm } from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 md:w-[400px] md:mx-auto">
      <ToastContainer
        position="top-right"
        autoClose={1001}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      <div className="space-y-8 w-full mt-24 md:mt-12">
        <div className="max-w-[400px] flex flex-col gap-4 items-center">
          <Icon className="mb-2" />
          <h1 className="text-[#0066FF] text-4xl font-medium mb-1">
            PaisaBank
          </h1>
          <p className="text-[#6B7280] text-sm mb-8">
            Comienza a manejar tu vida financiera
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}
