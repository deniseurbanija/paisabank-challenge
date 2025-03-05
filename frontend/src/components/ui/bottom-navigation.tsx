import Link from "next/link";
import Logout from "/public/logout.svg";
import Home from "/public/Home.svg";
import Document from "/public/Document.svg";

interface BottomNavigationProps {
  active: "home" | "movimientos" | "send";
}

export function BottomNavigation({ active }: BottomNavigationProps) {
  return (
    <div className="flex justify-around items-center py-3 px-4 border-t border-white/10 bg-white">
      <Link href="/home" className="flex flex-col items-center">
        <div
          className={`p-2 ${
            active === "home" ? "text-blue-500" : "text-black/60"
          }`}
        >
          <Home size={20} />
        </div>
      </Link>

      <Link href="/movimientos" className="flex flex-col items-center">
        <div
          className={`p-2 ${
            active === "movimientos" ? "text-blue-500" : "text-black/60"
          }`}
        >
          <Document size={20} />
        </div>
      </Link>

      <Link href="#" className="flex flex-col items-center">
        <div
          className={`p-2 ${
            active === "send" ? "text-blue-500" : "text-black/60"
          }`}
        >
          <Logout size={20} />
        </div>
      </Link>
    </div>
  );
}
