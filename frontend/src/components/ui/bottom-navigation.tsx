import Link from "next/link";
import Logout from "/public/logout.svg";
import Home from "/public/Home.svg";
import HomeActive from "/public/HomeActive.svg";
import Document from "/public/Document.svg";
import DocumentActive from "/public/DocumentActive.svg";

interface BottomNavigationProps {
  active: "home" | "movimientos" | "send";
}

export function BottomNavigation({ active }: BottomNavigationProps) {
  return (
    <div className="flex justify-around items-center py-3 px-4 border-t border-white/10 bg-white">
      <Link href="/home" className="flex flex-col items-center">
        {active === "home" ? <HomeActive /> : <Home />}
      </Link>

      <Link href="/movimientos" className="flex flex-col items-center">
        {active === "movimientos" ? <DocumentActive /> : <Document />}
      </Link>

      <Link href="#" className="flex flex-col items-center">
        <Logout />
      </Link>
    </div>
  );
}
