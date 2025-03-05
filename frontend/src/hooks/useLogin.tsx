"use client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const login = async (loginForm: { email: string; password: string }) => {
  const response = await axios.post(
    "http://localhost:3000/paisabank/login",
    loginForm
  );
  return response.data;
};

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem("token", data.data.token);
      router.push("/home");
    },
    onError: (error) => {
      toast.error("Usuario no encontrado o credenciales inválidas");
    },
  });
};
