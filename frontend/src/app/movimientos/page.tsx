import { TransactionItem } from "@/components/ui/transaction-item";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function MovimientosPage() {
  const transactions = [
    {
      id: 1,
      name: "Adobe",
      type: "Pago de suscripción",
      amount: "$125",
      icon: "adobe",
    },
    {
      id: 2,
      name: "Camila Montenegro",
      type: "Pago recibido",
      amount: "$95",
      icon: "payment",
    },
    {
      id: 3,
      name: "Figma",
      type: "Pago de suscripción",
      amount: "$125",
      icon: "figma",
    },
    {
      id: 4,
      name: "Leonardo Echazu",
      type: "Pago enviado",
      amount: "$95",
      icon: "user",
    },
    {
      id: 5,
      name: "Martin Bozzoli",
      type: "Pago recibido",
      amount: "$95",
      icon: "payment",
    },
    {
      id: 6,
      name: "Leonardo Echazu",
      type: "Pago enviado",
      amount: "$95",
      icon: "user",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen  max-w-md mx-auto">
      <header className="p-4">
        <h1 className="text-xl text-black/80 mb-4">Movimientos</h1>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/40 w-4 h-4" />
          <Input
            placeholder="Ingresa un monto o servicio"
            className="bg-white/10 border-black/10 text-black pl-10 placeholder:text-black/40"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 -mx-1">
          <button className="px-4 py-2 bg-white rounded-full text-black text-sm whitespace-nowrap">
            Todos
          </button>
          <button className="px-4 py-2 bg-white rounded-full text-black/60 text-sm whitespace-nowrap">
            Debito Aut.
          </button>
          <button className="px-4 py-2 bg-white rounded-full text-black/60 text-sm whitespace-nowrap">
            Recibido
          </button>
          <button className="px-4 py-2 bg-white rounded-full text-black/60 text-sm whitespace-nowrap">
            Enviado
          </button>
        </div>
      </header>

      <div className="p-4 space-y-3">
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            name={transaction.name}
            type={transaction.type}
            amount={transaction.amount}
            icon={transaction.icon}
          />
        ))}
      </div>

      <div className="mt-auto">
        <BottomNavigation active="movimientos" />
      </div>
    </div>
  );
}
