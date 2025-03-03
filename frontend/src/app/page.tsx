"use client";
import { useLogin } from "@/hooks/useLogin";
import Link from "next/link";
import { useState } from "react";

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
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-[400px] flex flex-col items-center">
        {/* Logo */}
        <div className="mb-2">
          <div className="w-12 h-12 bg-[#0066FF] rounded flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 10H21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-[#0066FF] text-2xl font-semibold mb-1">PaisBank</h1>
        <p className="text-[#6B7280] text-sm mb-8">
          Comienza a manejar tu vida financiera
        </p>

        {/* Form */}
        <div className="w-full space-y-4">
          <div className="space-y-1">
            <label className="text-[#374151] text-sm">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Ingresa tu email"
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-lg border border-[#E5E7EB] bg-white text-[#374151] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[#374151] text-sm">Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-lg border border-[#E5E7EB] bg-white text-[#374151] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
            />
          </div>

          <div className="flex items-center gap-2">
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
    </div>
  );
}
