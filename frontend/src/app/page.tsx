"use client";
import { useLogin } from "@/hooks/useLogin";
import Link from "next/link";
import { useState } from "react";
import Icon from "/public/paisabank-icon.svg";

export default function LoginPage() {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const loginMutation = useLogin();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate(loginForm); // Ejecuta la mutación
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 gap-44">
      <div className="space-y-8 w-full">
        <div className=" max-w-[400px] flex flex-col gap-4 items-center">
          <Icon className="mb-2" />
          <h1 className="text-[#0066FF] text-4xl font-medium mb-1">PaisBank</h1>
          <p className="text-[#6B7280] text-sm mb-8">
            Comienza a manejar tu vida financiera
          </p>
        </div>

        {/* Form */}
        <div className="w-full space-y-5 ">
          <div className="space-y-1">
            <label className="text-[#334154] text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Ingresa tu email"
              onChange={handleChange}
              className="w-full h-12 px-4 border border-gray-200 rounded-lg bg-white text-[#374151] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[#334154] text-sm font-medium">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              onChange={handleChange}
              className="w-full h-12 px-4 border border-gray-200 rounded-lg bg-white text-[#374151] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
            />
          </div>

          <div className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 rounded border-[#E5E7EB] bg-white text-[#0066FF] focus:ring-[#0066FF]"
            />
            <label htmlFor="remember" className="text-[#6B7280] text-sm">
              Recordarme
            </label>
          </div>
        </div>
      </div>
      {/* Button */}
      <Link href="/home" className="w-full mt-8">
        <button
          onClick={handleSubmit}
          className="w-full h-12 bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-lg font-medium transition-colors"
        >
          Ingresar
        </button>
      </Link>
    </div>
  );
}
