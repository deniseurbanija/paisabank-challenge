"use client";
import { useLogin } from "@/hooks/useLogin";
import { useState } from "react";

interface LoginFormData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [loginForm, setLoginForm] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const loginMutation = useLogin();

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    // Email validations
    if (!loginForm.email) {
      newErrors.email = "El email es requerido";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(loginForm.email)) {
      newErrors.email = "El email no es válido";
      isValid = false;
    }

    // Password validations
    if (!loginForm.password) {
      newErrors.password = "La contraseña es requerida";
      isValid = false;
    } else if (loginForm.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      loginMutation.mutate(loginForm);
    }
  };

  return (
    <div className="flex flex-col justify-between w-full h-full gap-40 md:gap-16">
      <div className="flex flex-col justify-between w-full gap-6 md:gap-2">
        <div className="space-y-1">
          <label className="text-[#334154] text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Ingresa tu email"
            value={loginForm.email}
            onChange={handleChange}
            className={`w-full h-12 px-4 my-3 shadow-xs rounded-lg bg-white text-[#374151] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="space-y-1">
          <label className="text-[#334154] text-sm font-medium">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            value={loginForm.password}
            onChange={handleChange}
            className={`w-full h-12 px-4 my-3 shadow-xs rounded-lg bg-white text-[#374151] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] ${
              errors.password ? "border-red-500" : ""
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
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

      <button
        onClick={handleSubmit}
        disabled={loginMutation.isPending}
        className={`w-full h-12 ${
          loginMutation.isPending
            ? "bg-[#99C2FF] cursor-not-allowed"
            : "bg-[#0066FF] hover:bg-[#0052CC]"
        } text-white rounded-lg font-medium transition-colors mt-8`}
      >
        {loginMutation.isPending ? "Ingresando..." : "Ingresar"}
      </button>
    </div>
  );
};
