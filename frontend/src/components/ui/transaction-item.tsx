import Image from "next/image";

interface TransactionItemProps {
  title: string;
  type: string;
  amount: string;
}

export function TransactionItem({ title, type, amount }: TransactionItemProps) {
  const ICONS_MAP = {
    SUS: "/TwoArrows.svg",
    CASH_IN: "/ArrowDown.svg",
    CASH_OUT: "/ArrowUp.svg",
  };
  const COLORS_MAP = {
    SUS: "#B946FF",
    CASH_IN: "#74CC9B",
    CASH_OUT: "#EF9C55",
  };

  const iconSrc = ICONS_MAP[type as keyof typeof ICONS_MAP];
  const color = COLORS_MAP[type as keyof typeof COLORS_MAP];

  return (
    <div className="bg-white rounded-xl shadow-xs p-4 flex items-center justify-between">
      <div className="flex items-center mx-2">
        <Image src={iconSrc} alt={type} width={24} height={24} />
        <div className="mx-4">
          <div className="text-[#616E7C] text-[16px] font-medium">{title}</div>
          <div className="text-black/50 text-xs">
            {type === "CASH_IN"
              ? "Pago recibido"
              : type === "CASH_OUT"
              ? "Pago enviado"
              : "Pago de suscripción"}
          </div>
        </div>
      </div>
      <div className="text-sm font-[400]" style={{ color: color }}>
        ${amount}
      </div>
    </div>
  );
}
