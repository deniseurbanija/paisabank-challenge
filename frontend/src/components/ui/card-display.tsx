interface CardDisplayProps {
  balance: string;
  cardNumber: string;
  name: string;
  expiry: string;
}

export function CardDisplay({
  balance,
  cardNumber,
  name,
  expiry,
}: CardDisplayProps) {
  return (
    <div className="relative w-full h-48 rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 p-4 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="text-white/80 text-xs">Balance</div>
          <div className="w-10 h-6 rounded-md bg-gradient-to-r from-orange-500 to-red-500"></div>
        </div>

        <div className="text-white text-2xl font-bold mt-1">${balance}</div>

        <div className="mt-4 flex gap-2">
          <div className="w-8 h-1 bg-white/40 rounded-full"></div>
          <div className="w-8 h-1 bg-white/40 rounded-full"></div>
          <div className="w-8 h-1 bg-white/40 rounded-full"></div>
          <div className="w-8 h-1 bg-white/40 rounded-full"></div>
        </div>

        <div className="text-white text-lg mt-1">{cardNumber}</div>

        <div className="flex justify-between items-end">
          <div className="text-white/90 text-sm">{name}</div>
          <div className="text-white/70 text-xs">
            Exp Date
            <br />
            {expiry}
          </div>
        </div>
      </div>
    </div>
  );
}
