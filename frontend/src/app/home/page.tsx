"use client";
import { CardDisplay } from "@/components/ui/card-display";
import { TransactionItem } from "@/components/ui/transaction-item";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Transaction, TransactionsResponse } from "@/types/Transaction";
import { Card, CardsResponse } from "@/types/Card";
import Notif from "@/public/Notification.svg";
import SearchIcon from "@/public/Search.svg";

export default function HomePage() {
  const router = useRouter();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [cards, setCards] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
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
        const [transactionsResponse, cardsResponse] = await Promise.all([
          axios.get<TransactionsResponse>(
            `${process.env.NEXT_PUBLIC_API_URL}/paisabank/movements/last`,
            {
              headers,
            }
          ),
          axios.get<CardsResponse>(
            `${process.env.NEXT_PUBLIC_API_URL}/paisabank/cards`,
            {
              headers,
            }
          ),
        ]);

        // Check if responses are successful
        if (!transactionsResponse.data.success || !cardsResponse.data.success) {
          throw new Error("Error en la respuesta de la API");
        }

        // Update state with the fetched data
        setTransactions(transactionsResponse.data.data);
        // Store all cards
        setCards(cardsResponse.data.data);
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

    fetchData();
  }, [router]);

  return (
    <div className="flex flex-col min-h-screen bg-white/5 max-w-md mx-auto md:w-[400px]">
      <div className="p-4">
        <div className="m-4 flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-black/80 text-sm mb-1">Hola</h2>
            <h1 className="text-black text-xl font-semibold mb-2">Paisanx</h1>
          </div>
          <div className="flex flex-row gap-6 items-center">
            <SearchIcon />
            <Notif />
          </div>
        </div>

        {isLoading ? (
          <div className="animate-pulse">
            <div className="h-48 bg-gray-200 rounded-xl mb-4"></div>
          </div>
        ) : error ? (
          <div className="p-4 bg-red-50 text-red-600 rounded-lg">{error}</div>
        ) : (
          <>
            {cards && cards.length > 0 ? (
              <div className="flex overflow-x-auto space-x-4 pb-4 px-2">
                {cards.map((card) => (
                  <CardDisplay
                    key={card.id}
                    balance={card.balance}
                    cardNumber={card.lastDigits.toString()}
                    name={card.name}
                    expiry={card.expDate}
                  />
                ))}
              </div>
            ) : (
              <div className="p-4 bg-yellow-50 text-yellow-600 rounded-lg">
                No se encontró información de tarjeta
              </div>
            )}

            <div className="mt-6">
              <h2 className="text-black/80 text-2xl font-medium mb-4">
                Últimos movimientos
              </h2>
              {transactions && transactions.length > 0 ? (
                <div className="space-y-3 mb-16">
                  {transactions.map((transaction) => (
                    <TransactionItem
                      key={transaction.id}
                      title={transaction.title}
                      type={transaction.transactionType}
                      amount={transaction.amount}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No hay movimientos recientes</p>
              )}
            </div>
          </>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigation active="home" />
      </div>
    </div>
  );
}
