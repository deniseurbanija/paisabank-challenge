interface TransactionItemProps {
  name: string;
  type: string;
  amount: string;
  icon: string;
}

export function TransactionItem({
  name,
  type,
  amount,
  icon,
}: TransactionItemProps) {
  const getIconColor = (iconType: string) => {
    switch (iconType) {
      case "adobe":
      case "figma":
        return "bg-purple-500";
      case "payment":
        return "bg-green-500";
      case "user":
      default:
        return "bg-orange-300";
    }
  };

  const getIconContent = (iconType: string) => {
    switch (iconType) {
      case "adobe":
        return "A";
      case "figma":
        return "F";
      case "payment":
        return "↓";
      case "user":
      default:
        return "L";
    }
  };

  return (
    <div className="bg-white rounded-xl p-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-full ${getIconColor(
            icon
          )} flex items-center justify-center text-black font-medium`}
        >
          {getIconContent(icon)}
        </div>
        <div>
          <div className="text-black text-sm">{name}</div>
          <div className="text-black/50 text-xs">{type}</div>
        </div>
      </div>
      <div className="text-black text-sm">{amount}</div>
    </div>
  );
}
