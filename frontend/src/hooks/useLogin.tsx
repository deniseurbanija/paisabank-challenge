"use client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

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
      router.push("/home"); // Redirigir a home
    },
    onError: () => {
      console.log("User not found");
    },
  });
};
