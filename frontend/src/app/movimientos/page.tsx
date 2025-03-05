"use client";
import { TransactionItem } from "@/components/ui/transaction-item";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Transaction, TransactionsResponse } from "@/types/Transaction";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MovimientosPage() {
  const router = useRouter();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async (filter = "all") => {
    try {
      setIsLoading(true);

      let token = localStorage.getItem("token");

      // Verify if token exists and is properly formatted
      if (!token) {
        router.push("/login"); // Redirect to login if no token
        return;
      }

      // Check if token needs "Bearer" prefix
      if (!token.startsWith("Bearer ")) {
        token = `Bearer ${token}`;
      }

      const headers = {
        Authorization: token,
      };

      // Fetch both endpoints in parallel
      const endpoint =
        filter === "all"
          ? "http://localhost:3000/paisabank/movements/all"
          : `http://localhost:3000/paisabank/movements/all?filter=${filter}`;

      const response = await axios.get(endpoint, { headers });

      // Check if responses are successful
      if (!response.data.success) {
        throw new Error("Error en la respuesta de la API");
      }

      // Update state with the fetched data
      setTransactions(response.data.data);
    } catch (err: any) {
      // Check if error is due to unauthorized access (401)
      if (err.response && err.response.status === 401) {
        localStorage.removeItem("token"); // Clear invalid token
        router.push("/login"); // Redirect to login
      }

      setError(err.message || "Error al cargar los datos");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    fetchData(filter);
  };

  const handleSearch = (e: any) => {
    setSearchQuery(e.target.value);
  };

  // Filter transactions based on search query
  const filteredTransactions = transactions.filter((transaction) => {
    return transaction.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="flex flex-col min-h-screen  max-w-md mx-auto">
      <header className="p-4">
        <h1 className="text-xl text-black/80 font-medium m-4">Movimientos</h1>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/40 w-4 h-4" />
          <Input
            placeholder="Ingresa un nombre o servicio"
            className="bg-white/10 border-black/10 text-black pl-10 placeholder:text-black/40"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 -mx-1">
          <button
            className={`px-4 py-2 bg-white rounded-full text-sm whitespace-nowrap cursor-pointer ${
              activeFilter === "all" ? "text-black" : "text-black/60"
            }`}
            onClick={() => handleFilterChange("all")}
          >
            Todos
          </button>
          <button
            className={`px-4 py-2 bg-white rounded-full text-sm whitespace-nowrap cursor-pointer ${
              activeFilter === "SUS" ? "text-black" : "text-black/60"
            }`}
            onClick={() => handleFilterChange("SUS")}
          >
            Débito Aut.
          </button>
          <button
            className={`px-4 py-2 bg-white rounded-full text-sm whitespace-nowrap cursor-pointer ${
              activeFilter === "CASH_IN" ? "text-black" : "text-black/60"
            }`}
            onClick={() => handleFilterChange("CASH_IN")}
          >
            Recibido
          </button>
          <button
            className={`px-4 py-2 bg-white rounded-full text-sm whitespace-nowrap cursor-pointer ${
              activeFilter === "CASH_OUT" ? "text-black" : "text-black/60"
            }`}
            onClick={() => handleFilterChange("CASH_OUT")}
          >
            Enviado
          </button>
        </div>
      </header>

      <div className="mb-20 space-y-3">
        {error ? (
          <div className="text-center py-4 text-red-500">
            Error: {error}. Por favor intenta de nuevo.
          </div>
        ) : filteredTransactions.length === 0 ? (
          <div className="text-center py-4">No se encontraron movimientos.</div>
        ) : (
          filteredTransactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              title={transaction.title}
              type={transaction.transactionType}
              amount={transaction.amount}
            />
          ))
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigation active="movimientos" />
      </div>
    </div>
  );
}
